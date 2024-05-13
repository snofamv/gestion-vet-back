import { PoolOptions } from 'mysql2';

import { config } from 'dotenv';

config({
  path: './.env',
});

const isProduction = process.env.NODE_ENVIRONMENT === 'production' || false;

export const options: PoolOptions = {
  host: isProduction ? process.env.DB_HOST! : 'localhost',
  database: isProduction ? process.env.DB_NAME! : 'bd_clinicaVet',
  port: isProduction ? parseInt(process.env.DB_PORT!) : 3306,
  user: isProduction ? process.env.DB_USER! : 'userVet',
  password: isProduction ? process.env.DB_PASSWORD! : 'root',
};

export default options;
