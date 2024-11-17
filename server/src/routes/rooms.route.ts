import { Router } from 'express';

const roomsRoute = Router();

roomsRoute.post('/', (req, res) => {
	res.send('Logic to create a new room');
});

roomsRoute.get('/', (req, res) => {
	res.send('Logic to get all rooms for the user');
});

roomsRoute.get('/:id', (req, res) => {
	res.send('Logic to get details of a room');
});

roomsRoute.put('/:id', (req, res) => {
	res.send('Logic to update room details');
});

roomsRoute.delete('/:id', (req, res) => {
	res.send('Logic to delete a room');
});

export default roomsRoute;
