import articles from './articles';
import auth from './auth';

const router = app => {
  app.use('/auth', auth);
  app.use('/articles', articles);
};

export default router;
