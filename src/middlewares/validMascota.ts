import { NextFunction, Request, Response } from 'express';
import { Mascota } from '../models/MascotaMySQL';
// import { Usuario } from '../models/Usuario';

export const validMascota = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const mascotaBody: Mascota = req.body;

  if (
    !mascotaBody.nombreMascota ||
    mascotaBody.nombreMascota.trim().length === 0
  ) {
    return res.status(400).json({
      success: false,
      message: 'Campo Nombre Mascota requerido',
    });
  }

  if (!mascotaBody.especie || mascotaBody.especie.trim().length === 0) {
    return res.status(400).json({
      success: false,
      message: 'Campo especie requerido',
    });
  }

  if (!mascotaBody.raza || mascotaBody.raza.trim().length === 0) {
    return res.status(400).json({
      success: false,
      message: 'Campo raza requerido',
    });
  }

  if (!mascotaBody.genero || mascotaBody.genero.trim().length === 0) {
    return res.status(400).json({
      success: false,
      message: 'Campo género requerido',
    });
  }

  if (
    !mascotaBody.edadMascota ||
    mascotaBody.edadMascota.toString().trim().length === 0
  ) {
    return res.status(400).json({
      success: false,
      message: 'Campo edad requerido',
    });
  }

  return next();
};
