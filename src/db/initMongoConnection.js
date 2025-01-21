import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const initMongoConnection = async () => {
  try {
    const user = process.env.MONGOOB_USER;
    const pwd = process.env.MONGOOB_PASSWORD;
    const url = process.env.MONGOOB_URL;
    const db = process.env.MONGOOB_DB;

    await mongoose.connect(
      `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority`,
      //   `mongodb+srv://${user}:${pwd}@${db}/?retryWrites=true&w=majority&appName=${url}`,
    );

    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.log('Error while setting up mongo connection', error);
    throw error;
  }
};
