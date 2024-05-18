import { Router } from 'express';
import { CitaMedicaController } from '../controllers/citaMedica.controller';

export const citaMedicaRouter = Router();

const citaMedicaController = new CitaMedicaController();

citaMedicaRouter.post('/cita-medica', citaMedicaController.setCitaMedica);
citaMedicaRouter.patch('/cita-medica', citaMedicaController.updateCitaMedica);

citaMedicaRouter.get('/citas-medicas/mascota/:idMascota');
citaMedicaRouter.get('/citas-medicas/rut/:rut');
