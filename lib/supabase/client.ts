import { createBrowserClient } from "@supabase/ssr";
import { Database } from "./data/types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_SECRET_KEY;

export const createClient = () =>
  createBrowserClient<Database>(
    supabaseUrl!,
    supabaseKey!,
  );