import { getAllAdmorals } from '../services/admirals';

export const getAllAdmiralsController = async (req, res, next) => {
  try {
    const admirals = await getAllAdmorals();

    res.json({
      status: 200,
      message: 'Successfully foun admorals!',
      data: admirals,
    });
  } catch (error) {
    next(error);
  }
};
