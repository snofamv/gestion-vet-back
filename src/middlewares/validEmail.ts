import { NextFunction, Request, Response } from 'express';

export const validEmail = (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.params;

  if (!email || email.trim().length === 0) {
    return res.status(401).json({
      success: false,
      message: 'Campo requerido',
    });
  }

  return next();
};
