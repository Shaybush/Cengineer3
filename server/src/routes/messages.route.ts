import { Router } from 'express';

const messagesRoute = Router();

messagesRoute.get('/:roomId', (req, res) => {
	res.send('Logic to get all messages for a room');
});

export default messagesRoute;
