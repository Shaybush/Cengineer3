import mongoose from 'mongoose';
import { envConfig } from '../config/env.config';

export const mongoConnect = async () => {
	try {
		await mongoose.connect(envConfig.mongoUrl);
		console.log('Connected to MongoDB');
	} catch (error) {
		console.log(error);
	}
};

mongoConnect();
