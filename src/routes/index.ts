import express  from 'express';
import blogRoutes from './blog.routes';
import commentRoutes from './comment.routes';
import queryRoutes from '../routes/query.routes'

const apiRouter = express.Router();

apiRouter.use('/blogs', blogRoutes);
apiRouter.use('/blogs', commentRoutes);
apiRouter.use('/queries', queryRoutes);

export default apiRouter;