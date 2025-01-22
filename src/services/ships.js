import { shipsCollection } from '../db/models/ships.js';

export const getAllShips = async () => {
  const ships = await shipsCollection.find();
  return ships;
};

export const getShipById = async (shipId) => {
  const ship = await shipsCollection.findById(shipId);
  return ship;
};
