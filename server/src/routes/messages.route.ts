import { Router } from 'express';

const messagesRoute = Router();

messagesRoute.get('/:roomId', (req, res) => {
	res.send('Logic to get all messages for a room');
});

messagesRoute.get('/unread/count/:userId', (req, res) => {
	res.send('Logic to get all unread messages for a user in room');
});

export default messagesRoute;
