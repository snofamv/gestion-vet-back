import { Router } from 'express';
import { validPersona } from '../middlewares/validPersona';
import { existRut } from '../middlewares/existRut';
import { existEmail } from '../middlewares/existEmail';
import { DueñoMascotaController } from '../controllers/dueñoMascota.controller';

export const dueñoMascotaRouter = Router();

const dueñoMascotaController = new DueñoMascotaController();

dueñoMascotaRouter.post(
  '/titular-mascota',
  validPersona,
  existRut,
  existEmail,
  dueñoMascotaController.setDueñoMascota,
);
