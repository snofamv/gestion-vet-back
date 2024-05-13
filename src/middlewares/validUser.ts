import { NextFunction, Request, Response } from 'express';
// import { Usuario } from '../models/Usuario';

export const validUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { password, nombreUsuario } = req.body;

    if (!password || !nombreUsuario) {
      return res.status(401).json({
        success: false,
        message: 'Campo requerido',
      });
    }
    if (password.trim() === '' || nombreUsuario.trim() === '') {
      return res.status(401).json({
        success: false,
        message: 'Campo requerido',
      });
    }

    return next();
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: 'tipo de dato debe ser string',
    });
  }
};
