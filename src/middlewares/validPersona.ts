import { NextFunction, Request, Response } from 'express';
import { Persona } from '../models/Persona';
// import { Usuario } from '../models/Usuario';

export const validPersona = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const personaBody: Persona = req.body;

  if (!personaBody.nombre || personaBody.nombre.trim().length === 0) {
    return res.status(401).json({
      success: false,
      message: 'Campo Nombre requerido',
    });
  }

  if (
    !personaBody.apellidoPaterno ||
    personaBody.apellidoPaterno.trim().length === 0
  ) {
    return res.status(401).json({
      success: false,
      message: 'Campo Apellido paterno requerido',
    });
  }

  if (
    !personaBody.apellidoMaterno ||
    personaBody.apellidoMaterno.trim().length === 0
  ) {
    return res.status(401).json({
      success: false,
      message: 'Campo Apellido materno requerido',
    });
  }

  if (
    !personaBody.fechaNacimiento ||
    personaBody.fechaNacimiento.trim().length === 0
  ) {
    return res.status(401).json({
      success: false,
      message: 'Campo fecha Nacimiento requerido',
    });
  }

  if (
    !personaBody.rut ||
    personaBody.fechaNacimiento.toString().trim().length === 0
  ) {
    return res.status(401).json({
      success: false,
      message: 'Campo rut requerido',
    });
  }

  if (!personaBody.dv || personaBody.dv.trim().length === 0) {
    return res.status(401).json({
      success: false,
      message: 'Campo dv requerido',
    });
  }

  if (!personaBody.sexo || personaBody.sexo.trim().length === 0) {
    return res.status(401).json({
      success: false,
      message: 'Campo sexo requerido',
    });
  }

  if (
    !personaBody.telefono ||
    personaBody.telefono.toString().trim().length === 0
  ) {
    return res.status(401).json({
      success: false,
      message: 'Campo telefono requerido',
    });
  }

  if (!personaBody.direccion || personaBody.direccion.length === 0) {
    return res.status(401).json({
      success: false,
      message: 'Campo dirección requerido',
    });
  }

  if (!personaBody.email || personaBody.email.length === 0) {
    return res.status(401).json({
      success: false,
      message: 'Campo email requerido',
    });
  }

  return next();
};
