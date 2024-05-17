import { NextFunction, Request, Response } from 'express';
import { getMascota } from '../repositories/mascotas.repository';

export const existMascota = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { idMascota } = req.params;

  const mascota = await getMascota(idMascota);

  if (!mascota) {
    return res.status(404).json({
      success: false,
      message: 'id Mascota no se encuentra registrada',
    });
  }

  next();
};
