import express from 'express';
import apiRouter from './routes';
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import cors from 'cors';

const options = {
  origin: [
    "http://127.0.0.1:5500/"
  ],
  
}



const swaggerDocument = YAML.load("./src/config/swagger.yaml");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(options))
app.use('/api/v1', apiRouter);
app.use("/v2/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', (req, res) => {
  res.status(200).json({ message: 'Welcome to the my blogs API' });
});

export default app;