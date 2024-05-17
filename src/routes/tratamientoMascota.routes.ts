import { Router } from 'express';
import { TratamientoMascotaController } from '../controllers/tratamientoMascota.controller';
import { existFichaClinica } from '../middlewares/existFichaClinica';

export const tratamientoMascotaRouter = Router();

const tratamientoMascotaController = new TratamientoMascotaController();

tratamientoMascotaRouter.get(
  '/tratamientos-mascotas/ficha-clinica/:idFichaClinica',
  existFichaClinica,
  tratamientoMascotaController.getTratamientosMascotas,
);

tratamientoMascotaRouter.get(
  '/tratamiento-mascota/tratamiento/:idTratamiento',
  tratamientoMascotaController.getTratamientoMascota,
);

tratamientoMascotaRouter.post(
  '/tratamiento-mascota/ficha-clinica/:idFichaClinica',
  existFichaClinica,
  tratamientoMascotaController.setTratamientoMascota,
);

tratamientoMascotaRouter.patch(
  '/tratamiento-mascota',
  tratamientoMascotaController.updateTratamientoMascota,
);
