import { Router } from 'express';
import userRoutes from './users.route';
import roomRoutes from './rooms.route';
import messageRoutes from './messages.route';

const router = Router();

router.use('/users', userRoutes);
router.use('/rooms', roomRoutes);
router.use('/messages', messageRoutes);

export default router;
