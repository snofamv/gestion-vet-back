import { NextFunction, Request, Response } from 'express';
import {
  getEspecialidadesService,
  setEspecialidadService,
  updateEspecialidadService,
} from '../services/especialidad.service';

export class EspecialidadController {
  async getEspecialidades(req: Request, res: Response, next: NextFunction) {
    try {
      const especialidades = await getEspecialidadesService();

      return res.status(200).json({
        success: true,
        data: especialidades,
      });
    } catch (err) {
      next(err);
    }
  }

  async setEspecialidad(req: Request, res: Response, next: NextFunction) {
    try {
      const especialidadBody = req.body;

      const result = await setEspecialidadService(especialidadBody);

      if (result && result.affectedRows > 0) {
        return res.status(200).json({
          success: true,
        });
      }

      return res.status(500).json({
        success: false,
        message: 'surgió un error al registrar especialidad',
      });
    } catch (err) {
      next(err);
    }
  }

  async updateEspecialidad(req: Request, res: Response, next: NextFunction) {
    try {
      const especialidadBody = req.body;

      const result = await updateEspecialidadService(especialidadBody);

      if (result && result.affectedRows > 0) {
        return res.status(200).json({
          success: true,
        });
      }

      return res.status(500).json({
        success: false,
        message: 'surgió un error al actualizar especialidad',
      });
    } catch (err) {
      next(err);
    }
  }
}
