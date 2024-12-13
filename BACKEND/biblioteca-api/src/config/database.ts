import { Pool } from "pg";
import dotenv from "dotenv";

//carrega as variaveis de embiente do .env
dotenv.config();

export const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT || "5432"),
});
