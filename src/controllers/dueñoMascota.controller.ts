import { Request, Response } from 'express';
import { Persona } from '../models/Persona';
import { setDueñoMascotaService } from '../services/dueñoMascota.service';
import { ErrorHandler } from '../middlewares/HandleError';

export class DueñoMascotaController {
  async setDueñoMascota(req: Request, res: Response) {
    try {
      const personaBody: Persona = req.body;

      const result = await setDueñoMascotaService(personaBody);

      if (result && result.affectedRows > 0) {
        return res.status(200).json({
          success: true,
        });
      }

      return res.status(500).json({
        success: false,
        message: 'no se podido registrar dueño de mascota',
      });
    } catch (err) {
      if (err instanceof Error) {
        const newError = new ErrorHandler('Se ha producido un error interno.');
        newError.setStatus(500);
        newError.setInternalMessage('Surgió un error al obtener personas');
        newError.setDetailsError(err.message);
        throw newError;
      }
    }
  }
}
