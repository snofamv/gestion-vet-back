import { NextFunction, Request, Response } from 'express';
import { getPersonaByEmail } from '../repositories/persona.repository';

export const existEmail = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const usuario = await getPersonaByEmail(req.body.email);

  if (!usuario) {
    return next();
  }

  return res.status(409).json({
    success: false,
    message: 'email ya se encuentra registrado',
  });
};
