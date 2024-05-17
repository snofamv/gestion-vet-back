import { Router } from 'express';
import { FichaClinicaController } from '../controllers/fichaClinica.controller';
import { existMascota } from '../middlewares/existMascota';
import { validFichaClinica } from '../middlewares/validFichaClinica';

export const fichaClinicaRouter = Router();

const fichaClinicaController = new FichaClinicaController();

fichaClinicaRouter.get(
  '/fichas-clinicas',
  fichaClinicaController.getFichasClinicas,
);

fichaClinicaRouter.post(
  '/ficha-clinica',
  validFichaClinica,
  fichaClinicaController.setFichaClinica,
);

fichaClinicaRouter.get(
  '/ficha-clinica/mascota/:idMascota',
  existMascota,
  fichaClinicaController.getFichasClinicasByIdMascota,
);

fichaClinicaRouter.get(
  '/fichas-clinicas/rut/:rut',
  existMascota,
  fichaClinicaController.getFichasClinicasByIdMascota,
);

fichaClinicaRouter.get(
  '/ficha-clinica/:idFichaClinica',
  existMascota,
  fichaClinicaController.getFichaClinicaByIdFichaClinica,
);

fichaClinicaRouter.patch(
  '/ficha-clinica',
  fichaClinicaController.UpdateFichaClinica,
);
