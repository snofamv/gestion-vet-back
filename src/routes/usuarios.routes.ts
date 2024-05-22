import { Router } from 'express';
import { UsuarioController } from '../controllers/usuario.controller';
import { validUser } from '../middlewares/validUser';
import { validPassword } from '../middlewares/validPassword';

export const usuarioRouter = Router();

const usuarioController = new UsuarioController();

usuarioRouter.patch(
  '/update-password',
  validUser,
  validPassword,
  usuarioController.updatePassword,
);

usuarioRouter.get('/usuarios', usuarioController.getUsuarios);
