import ArticleService from '../services/article';
import { createArticleSchema, updateArticleSchema } from '../utils/schemas';
import ApplicationController from './application';

class ArticlesController extends ApplicationController {
  constructor() {
    super('article', ArticleService, createArticleSchema, updateArticleSchema);
  }
}

export default new ArticlesController();
