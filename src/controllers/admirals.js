import createHttpError from 'http-errors';
import { getAllAdmirals, getAdmiralById } from '../services/admirals.js';

export const getAllAdmiralsController = async (req, res, next) => {
  try {
    const admirals = await getAllAdmirals();

    res.json({
      status: 200,
      message: 'Successfully foun admorals!',
      data: admirals,
    });
  } catch (error) {
    next(error);
  }
};

export const getAdmoralByIdController = async (req, res, next) => {
  const { admiralId } = req.params;
  const admiral = await getAdmiralById(admiralId);

  if (!admiral) throw createHttpError(404, 'Admiral not foud!');

  res.json({
    status: 200,
    message: `Successfully found admiral with id ${admiral}`,
    data: admiral,
  });
};
