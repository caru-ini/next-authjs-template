import { env as clientEnv } from "./client";
import { env as serverEnv } from "./server";

export const env = {
  ...serverEnv,
  ...clientEnv,
};
