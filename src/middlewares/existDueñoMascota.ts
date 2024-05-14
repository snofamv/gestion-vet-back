import { NextFunction, Request, Response } from 'express';
import { getDueñoByRut } from '../repositories/dueñoMascota.repository';

export const existDueñoMascota = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { rut } = req.params;

  const dueñoMascota = await getDueñoByRut(parseInt(rut));

  if (dueñoMascota) {
    return next();
  }

  return res.status(409).json({
    success: false,
    message: 'rut de dueño mascota no existe',
  });
};
