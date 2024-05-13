import { Request, Response } from 'express';
import {
  getPersonaByNombreUsuarioService,
  getPersonaByRutService,
  getPersonasService,
  setPersonaService,
  updatePersonaService,
} from '../services/persona.service';
import { Persona } from '../models/Persona';
import { ErrorHandler } from '../middlewares/HandleError';

export class PersonaController {
  async setPersona(req: Request, res: Response) {
    try {
      const personaBody: Persona = req.body;

      const result = await setPersonaService(personaBody);

      return res.status(200).json({
        result,
      });
    } catch (err) {
      if (err instanceof ErrorHandler) {
        return res.status(err.status).json({
          message: err.message,
        });
      }
    }
  }

  async updatePersona(req: Request, res: Response) {
    try {
      const personaBody: Persona = req.body;

      const result = await updatePersonaService(personaBody);

      if (result && result.affectedRows > 0) {
        return res.status(200).json({
          success: true,
        });
      }

      return res.status(500).json({
        success: false,
        message: 'no se podido actualizar Persona',
      });
    } catch (err) {
      if (err instanceof ErrorHandler) {
        return res.status(err.status).json({
          message: err.message,
        });
      }
    }
  }

  async getPersonaByRut(req: Request, res: Response) {
    try {
      const { rut } = req.params;

      const persona = await getPersonaByRutService(parseInt(rut));

      if (!persona) {
        return res.status(404).json({
          success: false,
          message: 'Persona no encontrada',
        });
      }

      return res.status(200).json({
        success: true,
        data: persona,
      });
    } catch (err) {
      if (err instanceof ErrorHandler) {
        return res.status(err.status).json({
          message: err.message,
        });
      }
    }
  }

  async getPersonaByNombreUsuario(req: Request, res: Response) {
    try {
      const { nombreUsuario } = req.params;

      const persona = await getPersonaByNombreUsuarioService(nombreUsuario);

      if (!persona) {
        return res.status(404).json({
          success: false,
          message: 'Persona no encontrada',
        });
      }

      return res.status(200).json({
        success: true,
        data: persona,
      });
    } catch (err) {
      if (err instanceof ErrorHandler) {
        return res.status(err.status).json({
          message: err.message,
        });
      }
    }
  }

  async getPersonas(req: Request, res: Response) {
    try {
      const personas = await getPersonasService();

      return res.status(200).json({
        success: true,
        data: personas || [],
      });
    } catch (err) {
      if (err instanceof ErrorHandler) {
        return res.status(err.status).json({
          message: err.message,
        });
      }
    }
  }
}
