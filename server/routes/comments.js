import { Router } from 'express';
import CommentsController from '../controllers/comments';
import AuthMiddleware from '../middleware/auth';

const router = new Router();

router.get('/', AuthMiddleware.loadUser, CommentsController.index());
router.get('/:id', AuthMiddleware.loadUser, CommentsController.show());
router.post('/', AuthMiddleware.loadUser, CommentsController.create());
router.patch('/:id', AuthMiddleware.loadUser, CommentsController.update());
router.delete('/', AuthMiddleware.loadUser, CommentsController.destroy());

export default router;
