import express  from 'express';
import blogRoutes from './blog.routes';
import commentRoutes from './comment.routes';
import queryRoutes from '../routes/query.routes';
import userRouter from './user.routes';

const apiRouter = express.Router();

apiRouter.use('/blogs', blogRoutes);
apiRouter.use('/blogs', commentRoutes);
apiRouter.use('/queries', queryRoutes);
apiRouter.use('/users', userRouter);

export default apiRouter;