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

class RedisDAL {
	private redisClient: RedisClientType;
	// connect to redis
	constructor() {
		this.redisClient = createClient({ url: REDIS_URL });

		this.redisClient.connect().then(() => console.log('connect to Redis'));

		this.redisClient.on('error', (err) => console.log('Redis Client Error', err));
	}

	async getSetValue<T>({ key, callbackFn, expirationTime }: IRedisCacheProps<T>): Promise<T> {
		try {
			const redisData = await this.redisClient.GET(key);
			if (redisData) return JSON.parse(redisData) as T;

			const newValue = await callbackFn();
			this.redisClient.SETEX(key, expirationTime, JSON.stringify(newValue));
			return newValue;
		} catch (error) {
			throw new Error(`error getting redis data: ${error.message}`);
		}
	}

	async getValueByKey<T>(key: string): Promise<T | null> {
		try {
			const redisData = await this.redisClient.GET(key);
			return redisData ? (JSON.parse(redisData) as T) : null;
		} catch (error) {
			throw new Error(`error getting redis data: ${error.message}`);
		}
	}

	async setKeyWithCallback<T>({ key, callbackFn, expirationTime }: IRedisCacheProps<T>): Promise<void> {
		try {
			const value = await callbackFn();
			await this.redisClient.SETEX(key, expirationTime, JSON.stringify(value));
		} catch (error) {
			throw new Error(`error set key with new data: ${error.message}`);
		}
	}

	async setKeyWithValue<T>({ key, value, expirationTime }: IRedisSetValueProps<T>): Promise<void> {
		try {
			await this.redisClient.SETEX(key, expirationTime, JSON.stringify(value));
		} catch (error) {
			throw new Error('error set key with new data');
		}
	}

	async deleteKey(key: string): Promise<void> {
		try {
			await this.redisClient.DEL(key);
		} catch (error) {
			throw new Error('error delete key');
		}
	}
}

const RedisCache = new RedisDAL();
export default RedisCache;
