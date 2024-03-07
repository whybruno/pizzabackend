import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();

const dbURL = process.env.VITE_SUPABASE_URL;
const dbKey = process.env.VITE_SUPABASE_ANON_KEY;

export const db = createClient(dbURL, dbKey);
