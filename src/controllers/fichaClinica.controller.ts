import { NextFunction, Request, Response } from 'express';
import {
  getFichaClinicaByIdFichaClinicaService,
  getFichasClinicasByIdMascotaService,
  getFichasClinicasByRutService,
  getFichasClinicasService,
  setFichaClinicaService,
  updateFichaClinicaService,
} from '../services/fichaClinica.service';
import { FichaClinica } from '../models/FichaClinica';

export class FichaClinicaController {
  async getFichasClinicas(req: Request, res: Response, next: NextFunction) {
    try {
      const fichasClinicas = await getFichasClinicasService();

      return res.status(200).json({
        success: true,
        data: fichasClinicas || [],
      });
    } catch (err) {
      next(err);
    }
  }

  async setFichaClinica(req: Request, res: Response, next: NextFunction) {
    try {
      const fichaClinicaBody: FichaClinica = req.body;

      const result = await setFichaClinicaService(fichaClinicaBody);

      if (result && result.affectedRows > 0) {
        return res.status(200).json({
          success: true,
        });
      }

      return res.status(500).json({
        success: false,
        message: 'ocurrió un error al registrar ficha médica',
      });
    } catch (err) {
      next(err);
    }
  }

  async UpdateFichaClinica(req: Request, res: Response, next: NextFunction) {
    try {
      const fichaClinicaBody: FichaClinica = req.body;

      const result = await updateFichaClinicaService(fichaClinicaBody);

      if (result && result.affectedRows > 0) {
        return res.status(200).json({
          success: true,
        });
      }

      return res.status(500).json({
        success: false,
        message: 'ocurrió un error al actualizar ficha médica',
      });
    } catch (err) {
      next(err);
    }
  }

  async getFichasClinicasByIdMascota(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { idMascota } = req.params;

      const fichaClinica = await getFichasClinicasByIdMascotaService(idMascota);

      if (fichaClinica) {
        return res.status(200).json({
          success: true,
          data: fichaClinica || [],
        });
      } else {
        return res.status(404).json({
          success: false,
          message: 'mascota no posee ficha clínica',
        });
      }
    } catch (err) {
      next(err);
    }
  }

  async getFichasClinicasByRutDueño(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { rut } = req.params;

      const fichaClinicas = await getFichasClinicasByRutService(parseInt(rut));

      if (fichaClinicas) {
        return res.status(200).json({
          success: true,
          data: fichaClinicas || [],
        });
      } else {
        return res.status(404).json({
          success: false,
          message: 'no hay registro de fichas clinicas',
        });
      }
    } catch (err) {
      next(err);
    }
  }

  async getFichaClinicaByIdFichaClinica(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { idFichaClinica } = req.params;

      const fichaClinica =
        await getFichaClinicaByIdFichaClinicaService(idFichaClinica);

      if (fichaClinica) {
        return res.status(200).json({
          success: true,
          data: fichaClinica || [],
        });
      } else {
        return res.status(404).json({
          success: false,
          message: 'mascota no posee ficha clínica',
        });
      }
    } catch (err) {
      next(err);
    }
  }
}
