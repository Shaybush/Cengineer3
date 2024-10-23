import { config } from 'dotenv';
config();

export const envConfig = {
	mongoUrl: process.env.MONGO_URL,
};
