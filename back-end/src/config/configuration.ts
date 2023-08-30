import { registerAs } from "@nestjs/config";

export default registerAs('config', () => ({
    database: {
        host: process.env.DATABASE_URI,
    }
}));