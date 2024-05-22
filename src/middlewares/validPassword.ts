import { NextFunction, Request, Response } from 'express';
import { getUser } from '../repositories/usuario.repository';
import { comparePassword } from './comparePassword';
import { Usuario } from '../models/Usuario';
// import { Usuario } from '../models/Usuario';

export const validPassword = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const usuarioBody: Usuario = req.body;
    const { oldPassword } = req.body;

    if (!oldPassword) {
      return res.status(400).json({
        success: false,
        message: 'campo contraseña actual requerido',
      });
    }

    const usuario = (await getUser(usuarioBody)) as Usuario;

    const validPassword = await comparePassword(
      oldPassword!,
      usuario.password!,
    );

    if (validPassword) {
      return next();
    }

    return res.status(401).json({
      success: false,
      message: 'contraseña actual incorrecta',
    });
  } catch (err) {
    next(err);
  }
};
