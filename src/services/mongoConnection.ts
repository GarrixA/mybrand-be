import mongoose from 'mongoose';
const urli = "mongodb+srv://aphro10:A2TnsR0lx6OOl9q0@cluster0.lwgz88o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

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