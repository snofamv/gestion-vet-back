import { Router } from 'express';
import { RecetaMascotaController } from '../controllers/recetaMascota.controller';

export const recetaMascotaRouter = Router();

const recetaMascotaController = new RecetaMascotaController();

recetaMascotaRouter.post(
  '/receta-mascota/ficha-ingreso/:idFichaIngreso',
  recetaMascotaController.setRecetaMascota,
);

recetaMascotaRouter.patch(
  '/receta-mascota',
  recetaMascotaController.updateRecetaMascota,
);

recetaMascotaRouter.get(
  '/recetas-mascota/ficha-ingreso/:idFichaIngreso',
  recetaMascotaController.getRecetasMascotaByIdFichaIngreso,
);
