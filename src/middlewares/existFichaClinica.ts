import { NextFunction, Request, Response } from 'express';
import { getFichaClinicaByIdFichaClinica } from '../repositories/fichaClinica.repository';

export const existFichaClinica = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { idFichaClinica } = req.params;

  const fichaClinica = await getFichaClinicaByIdFichaClinica(idFichaClinica);

  if (!fichaClinica) {
    return res.status(404).json({
      success: false,
      message: 'ficha clinica no encontrada',
    });
  }

  next();
};
