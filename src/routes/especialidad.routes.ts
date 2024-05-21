import { Router } from 'express';
import { EspecialidadController } from '../controllers/especialidad.controller';

export const especialidadRouter = Router();

export const especialidadesController = new EspecialidadController();

especialidadRouter.get(
  '/especialidades',
  especialidadesController.getEspecialidades,
);

especialidadRouter.post(
  '/especialidad',
  especialidadesController.setEspecialidad,
);

especialidadRouter.patch(
  '/especialidad',
  especialidadesController.updateEspecialidad,
);
