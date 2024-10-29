import { config } from 'dotenv';
config();

export const envConfig = {
	mongoUrl: process.env.MONGO_URL,
	nodeEnv: process.env.NODE_ENV,
};
