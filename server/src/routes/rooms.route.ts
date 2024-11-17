import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => {
	// Logic to create a new room
});

router.get('/', (req, res) => {
	// Logic to get all rooms for the user
});

router.get('/:id', (req, res) => {
	// Logic to get details of a room
});

router.put('/:id', (req, res) => {
	// Logic to update room details
});

router.delete('/:id', (req, res) => {
	// Logic to delete a room
});

export default router;
