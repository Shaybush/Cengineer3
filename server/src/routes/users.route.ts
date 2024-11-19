import { Router } from 'express';

const usersRoute = Router();

usersRoute.post('/send-code', (req, res) => {
	res.send('Generate a 6-digit code and store it in Redis');
});

usersRoute.post('/verify-code', (req, res) => {
	res.send('Check if code in redis');
});

usersRoute.put('/:id', (req, res) => {
	res.send('Logic to update user profile');
});

usersRoute.get('/:id', (req, res) => {
	res.send('Logic to get user info');
});

usersRoute.delete('/:id', (req, res) => {
	res.send('Logic to delete a user');
});

export default usersRoute;
