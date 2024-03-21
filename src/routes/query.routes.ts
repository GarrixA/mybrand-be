import express from 'express';
import httpConnect from '../controllers/query.controllers';
import auth from '../middlewares/authentication';

const queryRoutes = express.Router();

queryRoutes.post('/', httpConnect.httpCreateQuery);
queryRoutes.get('/', auth.authenticateAdmin, httpConnect.httpGetQueries);
queryRoutes.get('/:id', auth.authenticateAdmin, httpConnect.httpGetOneQuery);
queryRoutes.delete('/:id', auth.authenticateAdmin, httpConnect.httpDeleteQuery);

export default queryRoutes;