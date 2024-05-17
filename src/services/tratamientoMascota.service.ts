import { TratamientoMascota } from '../models/TratamientoMascota';
import {
  getTratamientoMascota,
  getTratamientosMascotas,
  setTratamientoMascota,
  setTratamientosMascotas,
  updateTratamientoMascota,
} from '../repositories/tratamientoMascota.repository';
import { generarId } from '../utils/generarId';

export const setTratamientoMascotaService = async (
  tratamientoMascota: TratamientoMascota,
  idFichaClinica: string,
) => {
  tratamientoMascota.idTratamiento = generarId();
  const resultsetTratamientoMascota =
    await setTratamientoMascota(tratamientoMascota);

  if (
    resultsetTratamientoMascota &&
    resultsetTratamientoMascota.affectedRows > 0
  ) {
    return await setTratamientosMascotas(
      idFichaClinica,
      tratamientoMascota.idTratamiento,
    );
  }

  return undefined;
};

export const updateTratamientoMascotaService = async (
  tratamientoMascota: TratamientoMascota,
) => {
  return await updateTratamientoMascota(tratamientoMascota);
};

export const getTratamientosMascotasService = async (
  idFichaClinica: string,
) => {
  return await getTratamientosMascotas(idFichaClinica);
};

export const getTratamientoMascotaService = async (idTratamiento: string) => {
  return await getTratamientoMascota(idTratamiento);
};
