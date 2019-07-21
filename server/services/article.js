import models from '../models';
import DataService from './data';

const { Article, User } = models;
const options = {
  include: [
    {
      model: User,
      as: 'author',
      attributes: {
        exclude: ['password'],
      },
    },
  ],
  attributes: {
    exclude: ['authorId'],
  },
};

class ArticleService extends DataService {
  constructor() {
    super(Article, options);
  }
}

export default new ArticleService();
