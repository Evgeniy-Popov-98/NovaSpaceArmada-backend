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

  if (!ship) {
    next(new Error('Ship not found!'));
    return;
  }

  res.json({
    status: 200,
    message: `Successfully found student with id ${ship}!`,
    data: ship,
  });
};
