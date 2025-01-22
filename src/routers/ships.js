import { Router } from 'express';

import { getAllShips, getShipById } from '../services/ships.js';

const router = Router();

router.get('/ships', async (req, res) => {
  const ships = await getAllShips();

  console.log(ships);

  res.status(200).json({
    data: ships,
  });
});

router.get('/ships/:shipId', async (req, res) => {
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

export default router;
