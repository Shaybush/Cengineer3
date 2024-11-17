import { Router } from 'express';
import usersRoute from './users.route';
import roomsRoute from './rooms.route';
import messagesRoute from './messages.route';

const indexRoute = Router();

indexRoute.use('/users', usersRoute);
indexRoute.use('/rooms', roomsRoute);
indexRoute.use('/messages', messagesRoute);

export default indexRoute;
