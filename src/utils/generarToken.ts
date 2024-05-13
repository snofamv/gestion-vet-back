import jwt from 'jsonwebtoken';
import { Usuario } from '../models/Usuario';

export const generarToken = (usuario: Usuario) => {
  return jwt.sign(
    {
      ...usuario,
    },
    'secreto',
    { expiresIn: '1h' },
  );
};
