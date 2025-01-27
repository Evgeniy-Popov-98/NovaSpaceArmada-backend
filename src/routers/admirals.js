import { Router } from 'express';

import { getAllAdmiralsController } from '../controllers/admirals.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/admirals', ctrlWrapper(getAllAdmiralsController));

export default router;
