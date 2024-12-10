import { Router } from 'express';
import usersRoute from './users.route';
import roomsRoute from './rooms.route';
import messagesRoute from './messages.route';
import { AppConfig } from '../config/app.config';

const indexRoute = Router();

indexRoute.use(AppConfig.apiUrl.users, usersRoute);
indexRoute.use(AppConfig.apiUrl.rooms, roomsRoute);
indexRoute.use(AppConfig.apiUrl.messages, messagesRoute);

export default indexRoute;
