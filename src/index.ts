import app from './app.js';
import { mongoConnect } from './services/mongoConnection.js';

const startServer = async () => {
  await mongoConnect();

  app.listen(8080, () => {
    console.log('server is listening ..... 8080');
  });
};

startServer();