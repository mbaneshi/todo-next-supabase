import { createClient } from "@supabase/supabase-js";
import { Database } from "./schema";

export const supabase = createClient(
  // process.env.NEXT_PUBLIC_SUPABASE_URL,
  "https://your-project.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlempzYWN2dGhlZHl2aXFtanN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzNDk2OTcsImV4cCI6MTk5MzkyNTY5N30.SfpwEmwp4yp0i7EFVikEHxo8jLboY3EV15Qj8tfjIio"

  // process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
