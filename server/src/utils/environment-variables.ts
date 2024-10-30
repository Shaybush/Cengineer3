import { expand } from 'dotenv-expand';
import { config } from 'dotenv';
import { resolve } from 'path';

const path = resolve(__dirname, '../../env', `.env.${process.env.NODE_ENV ?? 'development'}`);
expand(config({ path }));
