import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const { PORT, NODE_ENV, DATABASE_URI, JWT_SECRET, JWT_EXPIRE } = process.env;