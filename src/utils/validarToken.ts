import jwt from 'jsonwebtoken';
import { ErrorHandler } from '../middlewares/HandleError';

export const validarToken = (token: string) => {
  try {
    return jwt.verify(token, 'secreto');
  } catch (err) {
    if (err instanceof Error) {
      const newErr = new ErrorHandler('token inválido');
      newErr.setStatus(401);
      newErr.setInternalMessage('formato inválido de token');
      newErr.setDetailsError(err.message);
      throw newErr;
    }
  }
};
