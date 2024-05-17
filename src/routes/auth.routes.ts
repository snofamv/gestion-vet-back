import { Router } from 'express';

export const authRouter = Router();
import { AuthController } from '../controllers/auth.controller';
import { validUser } from '../middlewares/validUser';
import { existUser } from '../middlewares/existUser';
import { existToken } from '../middlewares/existToken';

const authController = new AuthController();

authRouter.post('/auth/login', validUser, authController.login);

authRouter.post('/auth/signup', validUser, existUser, authController.signup);

authRouter.get(
  '/auth/validate-token',
  existToken,
  authController.validateToken,
);
