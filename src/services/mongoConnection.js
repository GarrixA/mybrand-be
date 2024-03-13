const mongoose = require('mongoose');

mongoose.connection.on('open', () => {
  console.info('Database connected');
});

mongoose.connection.on('close', () => {
  console.info('something went wrong');
});

const mongoConnect = async () => {
  await mongoose.connect('mongodb://localhost:27017/Blogs');
};
const mongoDisconnect = async () => {
  await mongoose.disconnect();
};

module.exports = {
  mongoConnect,
  mongoDisconnect,
};