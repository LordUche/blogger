import { Router } from 'express';
import ArticlesController from '../controllers/articles';
import AuthMiddleware from '../middleware/auth';
import comments from './comments';

const router = new Router();

router.get('/', AuthMiddleware.loadUser, ArticlesController.index());
router.get('/:id', AuthMiddleware.loadUser, ArticlesController.show());
router.post('/', AuthMiddleware.loadUser, ArticlesController.create());
router.patch('/:id', AuthMiddleware.loadUser, ArticlesController.update());
router.delete('/:id', AuthMiddleware.loadUser, ArticlesController.destroy());
router.use('/:id/comments', comments);

export default router;
