import { shipCollection } from '../db/models/ship.js';

export const getAllShips = async () => {
  const ships = await shipCollection.find();
  console.log(ships);

  return ships;
};

export const getShipById = async (shipId) => {
  const ship = await shipCollection.findById(shipId);
  return ship;
};
