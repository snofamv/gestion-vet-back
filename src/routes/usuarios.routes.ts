import { Router } from 'express';
import { UsuarioController } from '../controllers/usuario.controller';
import { validUser } from '../middlewares/validUser';

export const usuarioRouter = Router();

const usuarioController = new UsuarioController();

usuarioRouter.patch(
  '/update-password',
  validUser,
  usuarioController.updatePassword,
);

usuarioRouter.get('/usuarios', usuarioController.getUsuarios);
