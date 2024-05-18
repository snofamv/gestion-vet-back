import { NextFunction, Request, Response } from 'express';
import {
  getMascotasByRutService,
  getMascotaService,
  getMascotasService,
  setMascotaService,
  updateMascotaService,
} from '../services/mascotas.service';
import { Mascota } from '../models/MascotaMySQL';

export class MascotaController {
  async getMascotasController(req: Request, res: Response, next: NextFunction) {
    try {
      const mascotas = await getMascotasService();

      return res.status(200).json({
        success: true,
        data: mascotas || [],
      });
    } catch (err) {
      next(err);
    }
  }

  async getMascotasByRutController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { rut } = req.params;

      const mascotas = await getMascotasByRutService(parseInt(rut));

      return res.status(200).json({
        success: true,
        data: mascotas || [],
      });
    } catch (err) {
      next(err);
    }
  }

  async getMascota(req: Request, res: Response, next: NextFunction) {
    try {
      const { idMascota } = req.params;
      const mascota = await getMascotaService(idMascota);

      if (!mascota) {
        return res.status(404).json({
          success: false,
          message: 'mascota no encontrada',
        });
      }

      return res.status(200).json({
        success: true,
        data: mascota,
      });
    } catch (err) {
      next(err);
    }
  }

  async setMascota(req: Request, res: Response, next: NextFunction) {
    try {
      const { rut } = req.params;
      const mascota: Mascota = req.body;

      const result = await setMascotaService(parseInt(rut), mascota);

      if (result && result.affectedRows > 0) {
        return res.status(200).json({
          success: true,
          data: result.idMascota,
        });
      }

      return res.status(500).json({
        success: false,
        message: 'ocurrio un error al registrar mascota',
      });
    } catch (err) {
      next(err);
    }
  }

  async updateMascota(req: Request, res: Response, next: NextFunction) {
    try {
      const mascota: Mascota = req.body;

      const result = await updateMascotaService(mascota);

      if (result && result.affectedRows > 0) {
        return res.status(200).json({
          success: true,
        });
      }
      return res.status(500).json({
        success: false,
        message: 'ocurrió un error al actualizar mascota',
      });
    } catch (err) {
      next(err);
    }
  }
}
