import { Insumo } from '../models/Insumo';
import { Insumotratamiento } from '../models/InsumoTratamiento';
import {
  getInsumos,
  getInsumosByIdFichaClinica,
  setInsumo,
  setInsumoTratamiento,
  updateInsumo,
  updateInsumoTratamiento,
} from '../repositories/insumo.repository';

export const getInsumosService = async () => {
  return await getInsumos();
};

export const setInsumoService = async (insumo: Insumo) => {
  return await setInsumo(insumo);
};

export const updateInsumoService = async (insumo: Insumo) => {
  return await updateInsumo(insumo);
};

export const getInsumosByIdFichaClinicaService = async (
  idFichaClinica: string,
) => {
  return await getInsumosByIdFichaClinica(idFichaClinica);
};

export const setInsumoTratamientoService = async (
  insumoTratamiento: Insumotratamiento,
) => {
  return await setInsumoTratamiento(insumoTratamiento);
};

export const updateInsumoTratamientoService = async (
  insumoTratamiento: Insumotratamiento,
) => {
  return await updateInsumoTratamiento(insumoTratamiento);
};
