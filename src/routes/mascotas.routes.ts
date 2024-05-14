import { Router } from 'express';
import { MascotaController } from '../controllers/mascota.controller';
import { validRut } from '../middlewares/validRut';
import { existDueñoMascota } from '../middlewares/existDueñoMascota';
import { validMascota } from '../middlewares/validMascota';

export const mascotaRouter = Router();

const mascotaController = new MascotaController();

mascotaRouter.get('/mascotas', mascotaController.getMascotasController);

mascotaRouter.get(
  '/titular-mascota/rut/:rut/mascotas',
  validRut,
  mascotaController.getMascotasByRutController,
);

mascotaRouter.post(
  '/titular-mascota/rut/:rut/mascota',
  validRut,
  existDueñoMascota,
  validMascota,
  mascotaController.setMascota,
);

mascotaRouter.patch('/mascota', validMascota, mascotaController.updateMascota);

mascotaRouter.get('/mascota/:idMascota', mascotaController.getMascota);
