import { NextFunction, Request, Response } from 'express';

export class ErrorHandler extends Error {
  status: number = -1;
  details: string = '';
  internalMessage: string = '';
  setStatus(status: number) {
    this.status = status;
  }

  setDetailsError(message: string) {
    this.details = message;
  }

  setInternalMessage(message: string) {
    this.internalMessage = message;
  }
}

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof ErrorHandler) {
    res.status(err.status || 500).json({
      error: err.internalMessage,
    });
  }

  next();
};
