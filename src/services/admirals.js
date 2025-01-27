import { admiralsCollection } from '../db/models/admirals.js';

export const getAllAdmirals = async () => {
  const admirals = await admiralsCollection.find();
  return admirals;
};

export const getAdmiralById = async (admiralId) => {
  const admirals = await admiralsCollection.findById(admiralId);
  return admirals;
};
