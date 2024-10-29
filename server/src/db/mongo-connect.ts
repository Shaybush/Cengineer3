import mongoose from 'mongoose';
import { envConfig } from '../config/env.config';

async function main() {
	try {
		console.log(`[${new Date().toISOString()}] [INFO]: Attempting to connect to MongoDB...`);
		await mongoose.connect(envConfig.mongoUrl);
		const workSpace = envConfig.nodeEnv ?? 'development';
		console.log(`[${new Date().toISOString()}] [INFO]: MongoDB connected successfully in '${workSpace}' mode.`);
	} catch (err) {
		console.error(`[${new Date().toISOString()}] [ERROR]: Failed to connect to MongoDB: ${err.message}`);
	}
}

(async () => {
	await main();
})();
