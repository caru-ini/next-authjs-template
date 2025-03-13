import { env as clientEnv } from "./client.js";
import { env as serverEnv } from "./server.js";

export const env = {
  ...serverEnv,
  ...clientEnv,
};
