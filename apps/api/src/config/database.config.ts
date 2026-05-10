import { Pool } from 'pg';

export const DATABASE_CONNECTION = 'DATABASE_CONNECTION';

export const databaseProvider = {
  provide: DATABASE_CONNECTION,
  useValue: new Pool({
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'AksiKita',
    password: process.env.DB_PASSWORD || 'AksiKita',
    port: parseInt((process.env.DB_PORT as string) || '5432'),
  }),
};