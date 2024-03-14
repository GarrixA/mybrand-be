import mongoose from 'mongoose';

mongoose.connection.on('open', () => {
  console.info('Database connected');
});

mongoose.connection.on('close', () => {
  console.info('something went wrong');
});

export const mongoConnect = async () => {
  await mongoose.connect('mongodb://localhost:27017/Blogs');
};

export const mongoDisconnect = async () => {
  await mongoose.disconnect();
};