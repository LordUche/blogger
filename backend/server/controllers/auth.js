import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../models';
import { loginSchema, registerSchema } from '../utils/schemas';

const { User } = db;

class AuthController {
  static async login(req, res) {
    try {
      await loginSchema.validate(req.body);
      const { dataValues: user } = await User.findOne({ where: { email: req.body.email } });
      if (user && bcrypt.compareSync(req.body.password, user.password)) {
        delete user.password;
        const token = jwt.sign({ user }, process.env.JWT_SECRET);
        res.status(200).json({ user, token });
      } else throw new Error('Incorrect password');
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  }

  static async register(req, res) {
    try {
      req.body.password = bcrypt.hashSync(req.body.password, 10);
      await registerSchema.validate(req.body);
      const { dataValues: user } = await User.create(registerSchema.cast(req.body));
      delete user.password;
      const token = jwt.sign({ user }, process.env.JWT_SECRET);
      res.status(201).json({ user, token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default AuthController;
