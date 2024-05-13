import { Request, Response } from 'express';
import { Empleado } from '../models/Empleado';
import {
  getEmpleadoByIdPersonaService,
  getEmpleadoByNombreUsuarioService,
  getEmpleadoByRutService,
  getEmpleadosService,
  setEmpleadoService,
  updateEmpleadoService,
} from '../services/empleado.service';
import { ErrorHandler } from '../middlewares/HandleError';
import { Persona } from '../models/Persona';
import { setPersonaService } from '../services/persona.service';

export class EmpleadoController {
  async setEmpleado(req: Request, res: Response) {
    try {
      const personaBody: Persona = req.body;
      const empleadoBody: Empleado = req.body;

      const resulSetPersona = await setPersonaService(personaBody);

      if (resulSetPersona && resulSetPersona.affectedRows > 0) {
        empleadoBody.idPersona = resulSetPersona.idPersona;

        const resultSetEmpleado = await setEmpleadoService(empleadoBody);

        return res.status(200).json({
          result: resultSetEmpleado,
        });
      }
    } catch (err) {
      if (err instanceof ErrorHandler) {
        return res.status(err.status).json({
          message: err.message,
        });
      }
    }
  }

  async getEmpleadoByRut(req: Request, res: Response) {
    try {
      const { rut } = req.params;

      const empleado = await getEmpleadoByRutService(parseInt(rut));

      if (!empleado) {
        return res.status(404).json({
          success: false,
          message: 'Empleado no encontrado',
        });
      }

      return res.status(200).json({
        success: true,
        data: empleado,
      });
    } catch (err) {
      if (err instanceof ErrorHandler) {
        return res.status(err.status).json({
          message: err.message,
        });
      }
    }
  }

  async getEmpleadoByIdPersona(req: Request, res: Response) {
    try {
      const { idPersona } = req.params;

      console.log(idPersona);

      const empleado = await getEmpleadoByIdPersonaService(idPersona);

      if (!empleado) {
        return res.status(404).json({
          success: false,
          message: 'Empleado no encontrado',
        });
      }

      return res.status(200).json({
        success: true,
        data: empleado,
      });
    } catch (err) {
      if (err instanceof ErrorHandler) {
        return res.status(err.status).json({
          message: err.message,
        });
      }
    }
  }

  async getEmpleadoByNombreUsuario(req: Request, res: Response) {
    try {
      const { nombreUsuario } = req.params;

      const persona = await getEmpleadoByNombreUsuarioService(nombreUsuario);

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

  async getEmpleados(req: Request, res: Response) {
    try {
      const empleados = await getEmpleadosService();

      return res.status(200).json({
        success: true,
        data: empleados || [],
      });
    } catch (err) {
      if (err instanceof ErrorHandler) {
        return res.status(err.status).json({
          message: err.message,
        });
      }
    }
  }

  async updateEmpleado(req: Request, res: Response) {
    try {
      const empleadoBody: Empleado = req.body;

      const result = await updateEmpleadoService(empleadoBody);

      if (result && result.affectedRows > 0) {
        return res.status(200).json({
          success: true,
        });
      }

      return res.status(500).json({
        success: false,
        message: 'no se podido actualizar empleado',
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
