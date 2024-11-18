import { Router } from 'express';

const roomsRoute = Router();

roomsRoute.get('/', (req, res) => {
	res.send('Logic to get all rooms for the user');
});

roomsRoute.delete('/:id', (req, res) => {
	res.send('Logic to delete a room');
});

export default roomsRoute;
