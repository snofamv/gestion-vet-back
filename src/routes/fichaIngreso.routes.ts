import { Router } from 'express';
import { FichaIngresoController } from '../controllers/fichaIngreso.controller';

export const fichaIngresoRouter = Router();

const fichaIngresoController = new FichaIngresoController();

fichaIngresoRouter.post(
  '/ficha-ingreso',
  fichaIngresoController.setFichaIngreso,
);

fichaIngresoRouter.patch(
  '/ficha-ingreso',
  fichaIngresoController.updateFichaIngreso,
);

fichaIngresoRouter.get(
  '/ficha-ingreso/ficha-clinica/:idFichaClinica',
  fichaIngresoController.getFichaIngresoByIdFichaClinica,
);
fichaIngresoRouter.get(
  '/ficha-ingreso/:idFichaIngreso',
  fichaIngresoController.getFichaIngresoByIdFichaIngreso,
);
