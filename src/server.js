import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import shipsRouter from './routers/ships.js';

import { env } from './utils/env.js';
import { ENV_VARS } from './constants/constants.js';

export const setupServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(pino({ transport: { target: 'pino-pretty' } }));

  app.use(shipsRouter);

  app.use('*', (req, res, next) => {
    res.status(404).json({ message: 'Not found!' });
  });

  app.use((err, req, res, next) => {
    res.status(500).json({
      message: 'Something went wrong!',
      error: err.message,
    });
  });

  const PORT = env(ENV_VARS.PORT, 3000);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
