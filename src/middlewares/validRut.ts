import { NextFunction, Request, Response } from 'express';

export const validRut = (req: Request, res: Response, next: NextFunction) => {
  const { rut } = req.params;

  if (!rut || rut.trim().length === 0) {
    return res.status(401).json({
      success: false,
      message: 'Campo requerido',
    });
  }

  if (isNaN(parseInt(rut.trim()))) {
    return res.status(401).json({
      success: false,
      message: 'rut debe ser de tipo number',
    });
  }

  return next();
};
