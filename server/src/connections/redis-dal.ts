import { createClient, RedisClientType } from 'redis';
import { REDIS_URL } from '../utils/environment-variables';

interface IRedisCacheProps<T> {
	key: string;
	callbackFn: () => Promise<T>;
	expirationTime: number;
}

interface IRedisSetValueProps<T> {
	key: string;
	value: T;
	expirationTime: number;
}

export class RedisDAL {
	public redisClient: RedisClientType;
	// connect to redis
	constructor() {
		if (!this.redisClient) {
			try {
				this.redisClient = createClient({ url: REDIS_URL });
				this.redisClient.connect().then(() => console.log('connect to Redis'));
			} catch (error: any) {
				// TODO - replace once AppError ready
				throw new Error('error here');
			}
		}
	}

	getSetValue<T>({ key, callbackFn, expirationTime }: IRedisCacheProps<T>): Promise<void | T> {
		return new Promise((resolve, reject) => {
			this.redisClient
				.GET(key)
				.then(async (redisData: string) => {
					if (redisData && redisData !== null) return resolve(JSON.parse(redisData));
					const value = await callbackFn();
					this.redisClient.SETEX(key, expirationTime, JSON.stringify(value));
					resolve(value);
				})
				.catch((error: { message: string }) => reject(new Error(`error getting redis data: ${error.message}`))); // TODO - replace once AppError ready
		});
	}

	async getValueByKey(key: string): Promise<Error | string> {
		return new Promise((resolve, reject) => {
			this.redisClient
				.GET(key)
				.then((value) => resolve(value))
				.catch((error: { message: string }) => reject(new Error(`error getting redis data: ${error.message}`))); // TODO - replace once AppError ready
		});
	}

	async setKeyWithCallback<T>({ key, callbackFn, expirationTime }: IRedisCacheProps<T>): Promise<void> {
		return new Promise(async (resolve, reject) => {
			const value = await callbackFn();
			this.redisClient
				.SETEX(key, expirationTime, JSON.stringify(value))
				.then(() => resolve())
				.catch((error: { message: string }) =>
					// TODO - replace once AppError ready
					reject(new Error(`error set key with new data: ${error.message}`))
				);
		});
	}

	async setKeyWithValue<T>({ key, value, expirationTime }: IRedisSetValueProps<T>): Promise<void> {
		return new Promise((resolve, reject) => {
			this.redisClient
				.SETEX(key, expirationTime, JSON.stringify(value))
				.then(() => resolve())
				.catch((error: { message: string }) =>
					// TODO - replace once AppError ready
					reject(new Error(`error set key with new data: ${error.message}`))
				);
		});
	}
}
