import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => {
	// Logic to send a new message
});

router.get('/:roomId', (req, res) => {
	// Logic to get messages for a room
});

router.delete('/:id', (req, res) => {
	// Logic to delete a message
});

export default router;
