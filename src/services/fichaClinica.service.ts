import { FichaClinica } from '../models/FichaClinica';
import {
  getFichasClinicasByIdMascota,
  getFichasClinicas,
  setFichaClinica,
  updateFichaClinica,
  getFichaClinicaByIdFichaClinica,
  getFichasClinicasByRutDueño,
} from '../repositories/fichaClinica.repository';
import { generarId } from '../utils/generarId';

export const getFichasClinicasService = async () => {
  return await getFichasClinicas();
};

export const setFichaClinicaService = async (fichaClinica: FichaClinica) => {
  fichaClinica.idFichaClinica = generarId();

  return await setFichaClinica(fichaClinica);
};

export const updateFichaClinicaService = async (fichaClinica: FichaClinica) => {
  return await updateFichaClinica(fichaClinica);
};

export const getFichasClinicasByIdMascotaService = async (
  idMascota: string,
) => {
  return await getFichasClinicasByIdMascota(idMascota);
};

export const getFichasClinicasByRutService = async (rut: number) => {
  return await getFichasClinicasByRutDueño(rut);
};

export const getFichaClinicaByIdFichaClinicaService = async (
  idMascota: string,
) => {
  return await getFichaClinicaByIdFichaClinica(idMascota);
};
