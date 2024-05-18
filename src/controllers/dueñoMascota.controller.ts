import { NextFunction, Request, Response } from 'express';
import { Persona } from '../models/Persona';
import {
  getDueñoMascotaByRutService,
  getDueñosMascotasService,
  setDueñoMascotaService,
} from '../services/dueñoMascota.service';
import { ErrorHandler } from '../middlewares/HandleError';

export class DueñoMascotaController {
  async setDueñoMascota(req: Request, res: Response, next: NextFunction) {
    try {
      const personaBody: Persona = req.body;

      const result = await setDueñoMascotaService(personaBody);

      if (result && result.affectedRows > 0) {
        return res.status(200).json({
          success: true,
          data: result.idDueño,
        });
      }

      return res.status(500).json({
        success: false,
        message: 'no se podido registrar dueño de mascota',
      });
    } catch (err) {
      next(err);
    }
  }

  async getDueñosMascotas(req: Request, res: Response) {
    try {
      const dueñosMascotas = await getDueñosMascotasService();

      return res.status(200).json({
        success: true,
        data: dueñosMascotas || [],
      });
    } catch (err) {
      if (err instanceof Error) {
        const newError = new ErrorHandler('Se ha producido un error interno.');
        newError.setStatus(500);
        newError.setInternalMessage(
          'Surgió un error al obtener dueños mascotas',
        );
        newError.setDetailsError(err.message);
        throw newError;
      }
    }
  }

  async getDueñoMascotaByRut(req: Request, res: Response) {
    try {
      const { rut } = req.params;

      const dueñoMascota = await getDueñoMascotaByRutService(parseInt(rut));

      if (!dueñoMascota) {
        return res.status(404).json({
          success: false,
          message: 'dueño mascota no encontrado',
        });
      }

      return res.status(200).json({
        success: true,
        data: dueñoMascota,
      });
    } catch (err) {
      if (err instanceof Error) {
        const newError = new ErrorHandler('Se ha producido un error interno.');
        newError.setStatus(500);
        newError.setInternalMessage(
          'Surgió un error al obtener dueño mascota por rut',
        );
        newError.setDetailsError(err.message);
        throw newError;
      }
    }
  }
}
