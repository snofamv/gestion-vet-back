import { NextFunction, Request, Response } from 'express';

export const existToken = (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.query;

  if (!token || token.toString().trim().length === 0) {
    return res.status(401).json({
      success: false,
      message: 'token requerido',
    });
  }

  return next();
};
