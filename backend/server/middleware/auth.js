import jwt from 'jsonwebtoken';
import models from '../models';

const { User } = models;

class AuthMiddleware {
  static async loadUser(req, res, next) {
    try {
      const token = req.headers.authorization.replace('Bearer ', '');
      const decoded = await jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findByPk(decoded.user.id);
      req.user = user;
      next();
    } catch (error) {
      res.status(401).json({ error: 'Unauthorized' });
    }
  }
}

export default AuthMiddleware;
