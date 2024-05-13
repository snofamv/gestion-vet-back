import { Router } from 'express';
import { EmpleadoController } from '../controllers/empleado.controller';
import { validRut } from '../middlewares/validRut';

export const empleadoRouter = Router();

const empleadoController = new EmpleadoController();

empleadoRouter.get(
  '/empleado/rut/:rut',
  validRut,
  empleadoController.getEmpleadoByRut,
);
empleadoRouter.get(
  '/empleado/id-persona/:idPersona',
  empleadoController.getEmpleadoByIdPersona,
);

empleadoRouter.get('/empleados/', empleadoController.getEmpleados);

empleadoRouter.get(
  '/empleado/nombre-usuario/:nombreUsuario',
  empleadoController.getEmpleadoByNombreUsuario,
);

empleadoRouter.patch('/empleado', empleadoController.updateEmpleado);
