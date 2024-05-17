import { NextFunction, Request, Response } from 'express';
import { loginService, signUpService } from '../services/auth.service';
import { Usuario } from '../models/Usuario';
import { generarToken } from '../utils/generarToken';
import { comparePassword } from '../middlewares/comparePassword';
import { Persona } from '../models/Persona';
import { Empleado } from '../models/Empleado';
import { validarToken } from '../utils/validarToken';

export class AuthController {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const usuarioBody: Usuario = req.body;
      const usuario = await loginService(usuarioBody);

      if (!usuario) {
        return res.status(401).json({
          success: false,
        });
      }

      const esValido = await comparePassword(
        usuarioBody.password!,
        usuario.password!,
      );

      if (!esValido) {
        return res.status(401).json({
          success: false,
        });
      }

      delete usuario.password;

      const token = generarToken(usuario);

      return res.status(200).json({
        success: true,
        usuario,
        token,
      });
    } catch (err) {
      next(err);
    }
  }

  // REGISTRAR UN NUEVO USUARIO
  // REGISTRAR PERSONA => REGISTRAR EMPLEADO => REGISTRAR USUARIO

  async signup(req: Request, res: Response, next: NextFunction) {
    try {
      const personaBody: Persona = req.body;
      const empleadoBody: Empleado = req.body;
      const usuarioBody: Usuario = req.body;

      const resultSetUsuario = await signUpService(
        personaBody,
        empleadoBody,
        usuarioBody,
      );

      if (resultSetUsuario && resultSetUsuario.affectedRows > 0) {
        return res.status(200).json({
          success: true,
        });
      }
    } catch (err) {
      next(err);
    }
  }

  async validateToken(req: Request, res: Response, next: NextFunction) {
    try {
      const { token } = req.query;

      if (token) {
        if (validarToken(token.toString())) {
          return res.status(200).json({
            success: true,
          });
        }

        return res.status(401).json({
          success: false,
          message: 'token inválido',
        });
      }
      return res.status(401).json({
        success: false,
        message: 'token requerido',
      });
    } catch (err) {
      next(err);
    }
  }
}
