import { NextFunction, Request, Response } from 'express';
import { FichaClinica } from '../models/FichaClinica';
// import { Usuario } from '../models/Usuario';

export const validFichaClinica = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const fichaClinica: FichaClinica = req.body;

  if (
    !fichaClinica.fechaIngreso ||
    fichaClinica.fechaIngreso.trim().length === 0
  ) {
    return res.status(400).json({
      success: false,
      message: 'Campo fecha ingreso requerido',
    });
  }

  if (!fichaClinica.peso || fichaClinica.peso.toString().trim().length === 0) {
    return res.status(400).json({
      success: false,
      message: 'Campo peso requerido',
    });
  }

  if (!fichaClinica.idMascota || fichaClinica.idMascota.length === 0) {
    return res.status(400).json({
      success: false,
      message: 'Campo idMascota requerido',
    });
  }

  return next();
};
