import models from '../models';
import DataService from './data';

const { Comment, User } = models;
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

class CommentService extends DataService {
  constructor() {
    super(Comment, options);
  }
}

export default new CommentService();
