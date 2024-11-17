import { Router } from 'express';

const messagesRoute = Router();

messagesRoute.post('/', (req, res) => {
	res.send('Logic to send a new message');
});

messagesRoute.get('/:roomId', (req, res) => {
	res.send('Logic to get all messages for a room');
});

messagesRoute.delete('/:id', (req, res) => {
	res.send('Logic to delete a message');
});

export default messagesRoute;
