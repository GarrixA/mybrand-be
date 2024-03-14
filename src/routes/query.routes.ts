import express from 'express';
import httpConnect from '../controllers/query.controllers';

const queryRoutes = express.Router();

queryRoutes.post('/', httpConnect.httpCreateQuery);
queryRoutes.get('/', httpConnect.httpGetQueries);
queryRoutes.get('/:id', httpConnect.httpGetOneQuery);
queryRoutes.delete('/:id', httpConnect.httpDeleteQuery);

export default queryRoutes;