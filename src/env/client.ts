import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  /**
   * Define schema for client-side environment variables
   * (those with NEXT_PUBLIC_ prefix)
   */
  client: {
    // Empty object as there are no client environment variables yet
    // Example: NEXT_PUBLIC_API_URL: z.string().url(),
  },
  /**
   * Actual values for client environment variables
   */
  runtimeEnv: {
    // Example: NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  /**
   * Treat empty strings as undefined
   */
  emptyStringAsUndefined: true,
});
