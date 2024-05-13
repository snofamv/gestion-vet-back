import { NextFunction, Request, Response } from 'express';
import { getUser } from '../repositories/usuario.repository';
import { Usuario } from '../models/UsuarioMySQL';

export const existUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const usuarioBody: Usuario = req.body;

  const usuario = await getUser(usuarioBody);

  if (!usuario) {
    return next();
  }

  return res.status(409).json({
    success: false,
    message: 'nombreUsuario ya se encuentra registrado',
  });
};
