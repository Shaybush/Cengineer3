import express, { NextFunction, Request, Response } from 'express';
import { createServer } from 'node:http';
import path from 'path';
import cors from 'cors';
import { AppConfig } from './config/app.config';
import { AppError } from './utils/app-error.util';
import {sendEmail , IEmailOptions} from './utils/email.util'

const app = express();
const server = createServer(app);

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'public')));

const emailOptions: IEmailOptions = {
    to: 'gwtlyby00@gmail.com',
    text: 'Please verify your email address to complete registration.',
    html: '<p>Please verify your email address to complete registration.</p>',
  };

app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(req.method, req.originalUrl)
    next()
})

app.get(AppConfig.apiUrl.health, (req, res) => {
    sendEmail(emailOptions);
    res.send("OK");

})

app.use((err: AppError, req: Request, res: Response, _next: NextFunction) => {
    console.error(`${req.method}:${req.originalUrl}, failed with error:${err}`);
    res.status(err.httpCode).json({ message: err.message, title: err.name, isOperational: err.isOperational })
});

server.listen(AppConfig.port, () => {
    console.log(`server is up on: http://localhost:${AppConfig.port}`);
});

