import { admiralsCollection } from '../db/models/admirals';

export const getAllAdmorals = async () => {
  const admirals = await admiralsCollection.find();
  return admirals;
};
