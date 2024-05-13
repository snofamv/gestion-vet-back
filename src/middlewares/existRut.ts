import { NextFunction, Request, Response } from 'express';
import { getPersonaByRut } from '../repositories/persona.repository';

export const existRut = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const usuario = await getPersonaByRut(req.body.rut);

  if (!usuario) {
    return next();
  }

  return res.status(409).json({
    success: false,
    message: 'rut ya se encuentra registrado',
  });
};
