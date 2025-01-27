import { Router } from 'express';

import {
  getAdmoralByIdController,
  getAllAdmiralsController,
} from '../controllers/admirals.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/admirals', ctrlWrapper(getAllAdmiralsController));

router.get('/admirals/:admiralId', ctrlWrapper(getAdmoralByIdController));

export default router;
