import { expand } from 'dotenv-expand';
import { config } from 'dotenv';
import { resolve } from 'path';

const path = resolve(__dirname, '../../env', `.env.${process.env.NODE_ENV ?? 'development'}`);
expand(config({ path }));

export const NODE_ENV = process.env.NODE_ENV ?? 'development';
export const MONGO_URL = process.env.MONGO_URL ?? '';
export const REDIS_URL = process.env.REDIS_URL ?? '';
