const NODE_ENV = process.env.NODE_ENV

/**
 * Environment variables of the application.
 */
export const env = {
  NODE_ENV,
  SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL!,
}
