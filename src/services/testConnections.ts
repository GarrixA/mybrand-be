import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connection.on('open', () => {
  console.info('Database connected');
});

mongoose.connection.on('close', () => {
  console.info('something went wrong');
});

export const mongoTestConnect = async () => {
  await mongoose.connect(process.env.URL_CLOUD_TEST as string);
};

export const mongoTestDisconnect = async () => {
  await mongoose.disconnect();
};