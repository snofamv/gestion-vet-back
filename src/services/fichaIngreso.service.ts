import { FichaIngreso } from '../models/FichaIngreso';
import {
  getFichaIngresoByIdFichaClinica,
  setFichaIngreso,
  updateFichaIngreso,
} from '../repositories/fichaIngreso.repository';
import { generarId } from '../utils/generarId';

export const setFichaIngresoService = async (fichaIngreso: FichaIngreso) => {
  fichaIngreso.idFichaIngreso = generarId();
  return await setFichaIngreso(fichaIngreso);
};

export const updateFichaIngresoService = async (fichaIngreso: FichaIngreso) => {
  return await updateFichaIngreso(fichaIngreso);
};

export const getFichaIngresoByIdFichaClinicaService = async (
  idFichaClinica: string,
) => {
  return await getFichaIngresoByIdFichaClinica(idFichaClinica);
};

export const getFichaIngresoByIdFichaIngresoService = async (
  idFichaIngreso: string,
) => {
  return await getFichaIngresoByIdFichaClinica(idFichaIngreso);
};
