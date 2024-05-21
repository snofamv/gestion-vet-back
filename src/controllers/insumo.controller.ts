import { NextFunction, Request, Response } from 'express';
import {
  getInsumosByIdFichaClinicaService,
  getInsumosService,
  setInsumoService,
  setInsumoTratamientoService,
  updateInsumoService,
  updateInsumoTratamientoService,
} from '../services/insumo.service';
import { Insumo } from '../models/Insumo';
import { Insumotratamiento } from '../models/InsumoTratamiento';

export class InsumoController {
  async getInsumos(req: Request, res: Response, next: NextFunction) {
    try {
      const insumos = await getInsumosService();

      return res.status(200).json({
        success: true,
        data: insumos,
      });
    } catch (err) {
      next(err);
    }
  }

  async setInsumo(req: Request, res: Response, next: NextFunction) {
    try {
      const insumoBody: Insumo = req.body;

      const result = await setInsumoService(insumoBody);

      if (result && result.affectedRows > 0) {
        return res.status(200).json({
          success: true,
        });
      }

      return res.status(500).json({
        success: false,
        message: 'surgió un error al registrar insumo',
      });
    } catch (err) {
      next(err);
    }
  }

  async updateInsumo(req: Request, res: Response, next: NextFunction) {
    try {
      const insumoBody: Insumo = req.body;

      const result = await updateInsumoService(insumoBody);

      if (result && result.affectedRows > 0) {
        return res.status(200).json({
          success: true,
        });
      }

      return res.status(500).json({
        success: false,
        message: 'surgió un error al actualizar insumo',
      });
    } catch (err) {
      next(err);
    }
  }

  async getInsumosByIdFichaClinica(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { idFichaClinica } = req.params;

      console.log(idFichaClinica);

      const insumos = await getInsumosByIdFichaClinicaService(idFichaClinica);

      return res.status(200).json({
        success: true,
        data: insumos,
      });
    } catch (err) {
      next(err);
    }
  }

  async setInsumoTratamiento(req: Request, res: Response, next: NextFunction) {
    try {
      const insumoBody: Insumotratamiento = req.body;

      const result = await setInsumoTratamientoService(insumoBody);

      if (result && result.affectedRows > 0) {
        return res.status(200).json({
          success: true,
        });
      }

      return res.status(500).json({
        success: false,
        message: 'surgió un error al registrar insumo tratamiento',
      });
    } catch (err) {
      next(err);
    }
  }

  async updateInsumoTratamiento(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const insumoBody: Insumotratamiento = req.body;

      const result = await updateInsumoTratamientoService(insumoBody);

      if (result && result.affectedRows > 0) {
        return res.status(200).json({
          success: true,
        });
      }

      return res.status(500).json({
        success: false,
        message: 'surgió un error al actualizar insumo tratamiento',
      });
    } catch (err) {
      next(err);
    }
  }
}
