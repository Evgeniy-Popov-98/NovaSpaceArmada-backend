import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const initMongoConnection = async () => {
  try {
    const user = process.env.console.log(
      'Mongo connection successfully established!',
    );
  } catch (error) {
    console.log('Error while setting up mpngo connection', error);
    throw error;
  }
};
