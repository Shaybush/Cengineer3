import mongoose from 'mongoose';
import { MONGO_URL, NODE_ENV } from '../utils/environment-variables';

async function main() {
	try {
		console.log(`[${new Date().toISOString()}] [INFO]: Attempting to connect to MongoDB...`);
		await mongoose.connect(MONGO_URL);
		const workSpace = NODE_ENV ?? 'development';
		console.log(`[${new Date().toISOString()}] [INFO]: MongoDB connected successfully in '${workSpace}' mode.`);
	} catch (err) {
		console.error(`[${new Date().toISOString()}] [ERROR]: Failed to connect to MongoDB: ${err.message}`);
	}
}

(async () => {
	await main();
})();