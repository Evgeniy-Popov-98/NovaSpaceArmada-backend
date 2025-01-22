import { Router } from 'express';

import {
  getAllShipsController,
  getShipByIdController,
} from '../controllers/ships.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/ships', ctrlWrapper(getAllShipsController));

router.get('/ships/:shipId', ctrlWrapper(getShipByIdController));

export default router;
