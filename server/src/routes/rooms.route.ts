import { Router } from 'express';

const roomsRoute = Router();

roomsRoute.get('/:userId', (req, res) => {
	res.send('Logic to get all rooms for the user');
});

roomsRoute.get('/:roomId/users', (req, res) => {
	res.send('Logic to get all users in a room');
});

export default roomsRoute;
