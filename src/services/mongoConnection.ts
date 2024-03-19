import mongoose from 'mongoose';
const urli = "mongodb://localhost:27017/Blogs"

mongoose.connection.on('open', () => {
  console.info('Database connected');
});

mongoose.connection.on('close', () => {
  console.info('something went wrong');
});

export const mongoConnect = async () => {
  await mongoose.connect(urli);
};

export const mongoDisconnect = async () => {
  await mongoose.disconnect();
};