import express from 'express';
import apiRouter from './routes'

const app = express();

app.use(express.json());

app.use('/api/v1', apiRouter);

app.use('/api/v1', (req, res) => {
  res.status(200).json({ message: 'Welcome to the my blogs API' });
});

export default app;