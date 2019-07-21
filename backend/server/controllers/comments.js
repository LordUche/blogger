import CommentService from '../services/comment';
import { createCommentSchema, updateCommentSchema } from '../utils/schemas';
import ApplicationController from './application';

class CommentsController extends ApplicationController {
  constructor() {
    super('comment', CommentService, createCommentSchema, updateCommentSchema);
  }
}

export default new CommentsController();
