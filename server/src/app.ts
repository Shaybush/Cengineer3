import express, { NextFunction, Request, Response } from 'express';
import './utils/environment-variables';
import { createServer } from 'node:http';
import path from 'path';
import cors from 'cors';
import { AppConfig } from './config/app.config';
import { AppError } from './utils/app-error.util';
import './db/mongo-connect';
import RedisCache from './connections/redis-dal';
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
	try {
		// testing redis with jsonplaceholder data using TS
		interface IJsonplaceholderModel {
			albumId: number;
			id: number;
			title: string;
			url: string;
			thumbnailUrl: string;
		}

		await RedisCache.setKeyWithValue({ key: 'example', value: 'test', expirationTime: 60 });
		RedisCache.getValueByKey('example').then((value) => {
			console.log('getValueByKey(example): ', value);
		});

		await RedisCache.setKeyWithCallback({
			key: 'data',
			callbackFn: async () => {
				const { data } = await axios.get<IJsonplaceholderModel[]>('https://jsonplaceholder.typicode.com/photos', {
					params: { albumId: 1 },
				});
				return data;
			},
			expirationTime: 60,
		});
		RedisCache.getValueByKey<IJsonplaceholderModel[]>('data').then((value) => {
			console.log('getValueByKey(data): ', value[0].title);
		});

		await RedisCache.getSetValue({
			key: `data?albumId=${10}`,
			callbackFn: async () => {
				const { data } = await axios.get<IJsonplaceholderModel[]>('https://jsonplaceholder.typicode.com/photos', {
					params: { albumId: 10 },
				});
				return data;
			},
			expirationTime: 60 * 2,
		});
		console.log('Before delete');
		await RedisCache.getValueByKey<IJsonplaceholderModel[]>(`data?albumId=${10}`).then((value) => {
			console.log('data?albumId: ', value);
		});

		console.log('Delete data?albumId=10');
		await RedisCache.deleteKey(`data?albumId=${10}`);

		console.log('After delete');
		await RedisCache.getValueByKey<IJsonplaceholderModel[]>(`data?albumId=${10}`).then((value) => {
			console.log('data?albumId=${10}: ', value);
		});

		res.send('redis');
	} catch (error) {
		next(error);
	}
});

app.get(AppConfig.apiUrl.health, async (req, res) => {
	res.send('OK');
});

app.use((err: AppError, req: Request, res: Response, _next: NextFunction) => {
	console.error(`${req.method}:${req.originalUrl}, failed with error:${err}`);
	res.status(err.httpCode).json({ message: err.message, title: err.name, isOperational: err.isOperational });
});

server.listen(AppConfig.port, () => {
	console.log(`server is up on: http://localhost:${AppConfig.port}`);
});
