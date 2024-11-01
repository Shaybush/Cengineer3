import express, { NextFunction, Request, Response } from 'express';
import './utils/environment-variables';
import { createServer } from 'node:http';
import path from 'path';
import cors from 'cors';
import { AppConfig } from './config/app.config';
import { AppError } from './utils/app-error.util';
import './db/mongo-connect';
import { RedisDAL } from './connections/redis-dal';
import axios from 'axios';

const app = express();
const server = createServer(app);

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use((req: Request, res: Response, next: NextFunction) => {
	console.log(req.method, req.originalUrl);
	next();
});

// TODO - remove after review
app.get('/redis', async (req: Request, res: Response, next: NextFunction) => {
	const redis = new RedisDAL();
	redis.setKeyWithValue({ key: 'example', value: 'test', expirationTime: 60 });
	redis.setKeyWithCallback({
		key: 'data',
		callbackFn: async () => {
			const { data } = await axios.get<{ albumId: number; id: number }>('https://jsonplaceholder.typicode.com/photos', {
				params: { albumId: 1 },
			});
			return data;
		},
		expirationTime: 60,
	});
	const randomNumber = Math.floor(Math.random() * 10);
	redis.getSetValue({
		key: `data?albomID=${randomNumber}`, // key changes
		callbackFn: async () => {
			const { data } = await axios.get<{ albumId: number; id: number }>('https://jsonplaceholder.typicode.com/photos', {
				params: { albumId: randomNumber },
			});
			return data;
		},
		expirationTime: 60,
	});

	res.send('redis');
});

app.get(AppConfig.apiUrl.health, async (req, res) => {
	res.send('OK');
	const redis = new RedisDAL();
	redis.getValueByKey('example').then((value) => {
		console.log(value);
	});
});

app.use((err: AppError, req: Request, res: Response, _next: NextFunction) => {
	console.error(`${req.method}:${req.originalUrl}, failed with error:${err}`);
	res.status(err.httpCode).json({ message: err.message, title: err.name, isOperational: err.isOperational });
});

server.listen(AppConfig.port, () => {
	console.log(`server is up on: http://localhost:${AppConfig.port}`);
});
