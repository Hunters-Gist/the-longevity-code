import "server-only";

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  if (process.env.NODE_ENV === "production") {
    throw new Error(
      "DATABASE_URL is not configured. Set it in Vercel → Environment Variables.",
    );
  }
}

const sql = neon(connectionString ?? "postgres://missing");

export const db = drizzle(sql, { schema });
export { schema };
