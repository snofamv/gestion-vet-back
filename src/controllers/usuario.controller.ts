import { Request, Response } from 'express';
import { Usuario } from '../models/Usuario';
import {
  getUserService,
  getUsersService,
  updatePasswordService,
} from '../services/usuario.service';
import { ErrorHandler } from '../middlewares/HandleError';

export class UsuarioController {
  async updatePassword(req: Request, res: Response) {
    try {
      const usuarioBody: Usuario = req.body;

      const usuario = await getUserService(usuarioBody);

      if (!usuario) {
        return res.status(404).json({
          success: false,
          message: 'Usuario no encontrado',
        });
      }
      const result = await updatePasswordService(usuarioBody);

      if (result && result.affectedRows > 0) {
        return res.status(200).json({
          success: true,
        });
      }

      return res.status(500).json({
        success: false,
        message: 'no se podido actualizar contraseña',
      });
    } catch (err) {
      if (err instanceof ErrorHandler) {
        return res.status(err.status).json({
          message: err.message,
        });
      }
    }
  }

  async getUsuarios(req: Request, res: Response) {
    try {
      const usuarios = await getUsersService();

      return res.status(200).json({
        success: true,
        data: usuarios || [],
      });
    } catch (err) {
      if (err instanceof ErrorHandler) {
        return res.status(err.status).json({
          message: err.message,
        });
      }
    }
  }
}
