import { NextFunction, Request, Response } from 'express';
import {
  getTratamientoMascotaService,
  getTratamientosMascotasService,
  setTratamientoMascotaService,
  updateTratamientoMascotaService,
} from '../services/tratamientoMascota.service';

export class TratamientoMascotaController {
  async setTratamientoMascota(req: Request, res: Response, next: NextFunction) {
    try {
      const { idFichaClinica } = req.params;
      const tratamientoMascotaBody = req.body;

      const result = await setTratamientoMascotaService(
        tratamientoMascotaBody,
        idFichaClinica,
      );

      if (result && result.affectedRows > 0) {
        return res.status(200).json({
          success: true,
          data: result.idTratamiento,
        });
      }
      return res.status(500).json({
        success: false,
        message: 'ocurrio un error al registrar tratamiento',
      });
    } catch (err) {
      next(err);
    }
  }

  async updateTratamientoMascota(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const tratamientoMascotaBody = req.body;

      const result = await updateTratamientoMascotaService(
        tratamientoMascotaBody,
      );

      if (result && result.affectedRows > 0) {
        return res.status(200).json({
          success: true,
        });
      }
      return res.status(500).json({
        success: false,
        message: 'ocurrio un error al actualizar tratamiento',
      });
    } catch (err) {
      next(err);
    }
  }

  async getTratamientoMascota(req: Request, res: Response, next: NextFunction) {
    try {
      const { idTratamiento } = req.params;

      const tratamiento = await getTratamientoMascotaService(idTratamiento);

      if (tratamiento) {
        return res.status(200).json({
          success: true,
          data: tratamiento,
        });
      }

      return res.status(404).json({
        success: true,
        message: 'tratamiento no encontrado',
      });
    } catch (err) {
      next(err);
    }
  }

  async getTratamientosMascotas(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { idFichaClinica } = req.params;

      const tratamientos = await getTratamientosMascotasService(idFichaClinica);

      if (tratamientos) {
        return res.status(200).json({
          success: true,
          data: tratamientos,
        });
      }

      return res.status(404).json({
        success: true,
        message: 'tratamientos no encontrados',
      });
    } catch (err) {
      next(err);
    }
  }
}
