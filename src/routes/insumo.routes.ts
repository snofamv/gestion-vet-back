import { Router } from 'express';
import { InsumoController } from '../controllers/insumo.controller';

export const insumoRouter = Router();

const insumoController = new InsumoController();

insumoRouter.get('/insumos', insumoController.getInsumos);

insumoRouter.post('/insumo', insumoController.setInsumo);
insumoRouter.patch('/insumo', insumoController.updateInsumo);

insumoRouter.get(
  '/insumos/ficha-clinica/:idFichaClinica',
  insumoController.getInsumosByIdFichaClinica,
);
insumoRouter.post('/insumo/tratamiento', insumoController.setInsumoTratamiento);
insumoRouter.patch(
  '/insumo/tratamiento',
  insumoController.updateInsumoTratamiento,
);
