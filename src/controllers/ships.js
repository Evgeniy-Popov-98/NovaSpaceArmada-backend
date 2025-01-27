import createHttpError from 'http-errors';
import { getAllShips, getShipById } from '../services/ships.js';

export const getAllShipsController = async (req, res, next) => {
  try {
    const ships = await getAllShips();

    res.json({
      status: 200,
      message: 'Successfully found ships!',
      data: ships,
    });
  } catch (error) {
    next(error);
  }
};

export const getShipByIdController = async (req, res, next) => {
  const { shipId } = req.params;
  const ship = await getShipById(shipId);

  if (!ship) throw createHttpError(404, 'Ship not found!');

  res.json({
    status: 200,
    message: `Successfully found ship with id ${ship}!`,
    data: ship,
  });
};
