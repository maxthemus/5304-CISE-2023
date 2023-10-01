import { registerAs } from "@nestjs/config";

import * as dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file


export default registerAs('config', () => ({
    database: {
        host: process.env.DATABASE_URI,
    }
}));