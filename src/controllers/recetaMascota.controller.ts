import { NextFunction, Request, Response } from 'express';
import { RecetaMascota } from '../models/RecetaMascota';
import {
  getRecetasMascotaByIdFichaIngresoService,
  setRecetaMascotaService,
  updateRecetaMascotaService,
} from '../services/recetaMascota.service';

export class RecetaMascotaController {
  async setRecetaMascota(req: Request, res: Response, next: NextFunction) {
    try {
      const { idFichaIngreso } = req.params;
      const recetaMascotaBody: RecetaMascota = req.body;

      const result = await setRecetaMascotaService(
        recetaMascotaBody,
        idFichaIngreso,
      );

      if (result && result.affectedRows > 0) {
        return res.status(200).json({
          success: true,
        });
      }

      return res.status(500).json({
        success: false,
        message: 'surgió un error al registrar receta mascota',
      });
    } catch (err) {
      next(err);
    }
  }

  async updateRecetaMascota(req: Request, res: Response, next: NextFunction) {
    try {
      const recetaMascotaBody: RecetaMascota = req.body;

      const result = await updateRecetaMascotaService(recetaMascotaBody);

      if (result && result.affectedRows > 0) {
        return res.status(200).json({
          success: true,
        });
      }

      return res.status(500).json({
        success: false,
        message: 'surgió un error al actualizar receta mascota',
      });
    } catch (err) {
      next(err);
    }
  }

  async getRecetasMascotaByIdFichaIngreso(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { idFichaIngreso } = req.params;

      const recetasMascota =
        await getRecetasMascotaByIdFichaIngresoService(idFichaIngreso);

      if (recetasMascota) {
        return res.status(200).json({
          success: true,
          data: recetasMascota || [],
        });
      }

      return res.status(500).json({
        success: false,
        message: 'surgió un error al obtener recetas mascota',
      });
    } catch (err) {
      next(err);
    }
  }
}
