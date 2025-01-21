import express from 'express';

import { env } from './utils/env.js';
import { ENV_VARS } from './constants/constants.js';

export const setupServer = () => {
  const app = express();

  const PORT = env(ENV_VARS.PORT, 3000);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
