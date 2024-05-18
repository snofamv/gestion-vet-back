import { NextFunction, Request, Response } from 'express';
import { FichaIngreso } from '../models/FichaIngreso';
import {
  getFichaIngresoByIdFichaClinicaService,
  setFichaIngresoService,
  updateFichaIngresoService,
} from '../services/fichaIngreso.service';

export class FichaIngresoController {
  async setFichaIngreso(req: Request, res: Response, next: NextFunction) {
    try {
      const fichaIngresoBody: FichaIngreso = req.body;

      const result = await setFichaIngresoService(fichaIngresoBody);

      if (result && result.affectedRows > 0) {
        return res.status(200).json({
          success: true,
          data: result.idFichaIngreso,
        });
      }

      return res.status(500).json({
        success: false,
        message: 'ocurrió un error al registrar ficha ingreso ',
      });
    } catch (err) {
      next(err);
    }
  }

  async updateFichaIngreso(req: Request, res: Response, next: NextFunction) {
    try {
      const fichaIngresoBody: FichaIngreso = req.body;

      const result = await updateFichaIngresoService(fichaIngresoBody);

      if (result && result.affectedRows > 0) {
        return res.status(200).json({
          success: true,
        });
      }

      return res.status(500).json({
        success: false,
        message: 'ocurrió un error al registrar ficha ingreso ',
      });
    } catch (err) {
      next(err);
    }
  }

  async getFichaIngresoByIdFichaClinica(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { idFichaClinica } = req.params;

      const fichaIngreso =
        await getFichaIngresoByIdFichaClinicaService(idFichaClinica);

      if (fichaIngreso) {
        return res.status(200).json({
          success: true,
          data: fichaIngreso,
        });
      }

      return res.status(404).json({
        success: false,
        message: 'no se encontro ficha ingreso',
      });
    } catch (err) {
      next(err);
    }
  }

  async getFichaIngresoByIdFichaIngreso(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { idFichaIngreso } = req.params;

      const fichaIngreso =
        await getFichaIngresoByIdFichaClinicaService(idFichaIngreso);

      if (fichaIngreso) {
        return res.status(200).json({
          success: true,
          data: fichaIngreso,
        });
      }

      return res.status(404).json({
        success: false,
        message: 'no se encontro ficha ingreso',
      });
    } catch (err) {
      next(err);
    }
  }
}
