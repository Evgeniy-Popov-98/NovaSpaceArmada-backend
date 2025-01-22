import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import shipsRouter from './routers/ships.js';

import { env } from './utils/env.js';
import { ENV_VARS } from './constants/constants.js';
import { notFoundHandler } from './middlewares/notFaoundHandler.js';
import { errorHandeler } from './middlewares/errorHandler.js';

export const setupServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(pino({ transport: { target: 'pino-pretty' } }));

  app.use(shipsRouter);

  app.use('*', notFoundHandler);

  app.use(errorHandeler);

  const PORT = env(ENV_VARS.PORT, 3000);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
