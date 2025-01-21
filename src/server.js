import express from 'express';

import { env } from './utils/env.js';
import { ENV_VARS } from './constants/constants.js';

import { getAllShips, getShipById } from './services/ships.js';

export const setupServer = () => {
  const app = express();

  app.get('/ships', async (req, res) => {
    const ships = await getAllShips();

    console.log(ships);

    res.status(200).json({
      data: ships,
    });
  });

  app.get('/ships/:shipId', async (req, res) => {
    const { shipId } = req.params;
    const ship = await getShipById(shipId);

    if (!ship) {
      res.status(404).json({
        message: 'Ship not found!',
      });
      return;
    }

    res.status(200).json({
      data: ship,
    });
  });

  const PORT = env(ENV_VARS.PORT, 3000);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
