import { NextFunction, Request, Response } from 'express';
import {
  getCitasMedicasByIdMascotaService,
  getCitasMedicasByRutService,
  getCitasMedicasService,
  setCitaMedicaService,
  updateCitaMedicaService,
} from '../services/citaMedica.service';

export class CitaMedicaController {
  async setCitaMedica(req: Request, res: Response, next: NextFunction) {
    try {
      const citaMedicaBody = req.body;

      const result = await setCitaMedicaService(citaMedicaBody);

      if (result && result.affectedRows > 0) {
        return res.status(200).json({
          success: true,
          data: result.idCitaMedica,
        });
      }

      return res.status(500).json({
        success: false,
        message: 'surgio un error al registrar cita medica',
      });
    } catch (err) {
      next(err);
    }
  }

  async updateCitaMedica(req: Request, res: Response, next: NextFunction) {
    try {
      const citaMedicaBody = req.body;

      const result = await updateCitaMedicaService(citaMedicaBody);

      if (result && result.affectedRows > 0) {
        return res.status(200).json({
          success: true,
          data: result.idCitaMedica,
        });
      }

      return res.status(500).json({
        success: false,
        message: 'surgio un error al registrar cita medica',
      });
    } catch (err) {
      next(err);
    }
  }

  async getCitasMedicasByIdMascota(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { idMascota } = req.params;

      const citasMedicas = await getCitasMedicasByIdMascotaService(idMascota);

      if (citasMedicas) {
        return res.status(200).json({
          success: true,
          data: citasMedicas || [],
        });
      }

      return res.status(500).json({
        success: false,
        message: 'surgio un error al registrar cita medica',
      });
    } catch (err) {
      next(err);
    }
  }

  async getCitasMedicasByRut(req: Request, res: Response, next: NextFunction) {
    try {
      const { rut } = req.params;

      const citasMedicas = await getCitasMedicasByRutService(parseInt(rut));

      if (citasMedicas) {
        return res.status(200).json({
          success: true,
          data: citasMedicas || [],
        });
      }

      return res.status(500).json({
        success: false,
        message: 'surgio un error al registrar cita medica',
      });
    } catch (err) {
      next(err);
    }
  }

  async getCitasMedicas(req: Request, res: Response, next: NextFunction) {
    try {
      const citasMedicas = await getCitasMedicasService();

      if (citasMedicas) {
        return res.status(200).json({
          success: true,
          data: citasMedicas || [],
        });
      }

      return res.status(500).json({
        success: false,
        message: 'surgio un error al registrar cita medica',
      });
    } catch (err) {
      next(err);
    }
  }
}
