import { Mascota } from '../models/MascotaMySQL';
import {
  getDueñoByRut,
  setMascotasDueño,
} from '../repositories/dueñoMascota.repository';
import {
  getMascota,
  getMascotas,
  getMascotasByRut,
  setMascota,
  updateMascota,
} from '../repositories/mascotas.repository';
import { generarId } from '../utils/generarId';

export const getMascotasService = async () => {
  return await getMascotas();
};

export const getMascotasByRutService = async (rut: number) => {
  return await getMascotasByRut(rut);
};

export const getMascotaService = async (idMascota: string) => {
  return await getMascota(idMascota);
};

export const setMascotaService = async (rut: number, mascota: Mascota) => {
  mascota.idMascota = generarId();

  const resultSetMascota = await setMascota(mascota);

  const dueñoMascota = await getDueñoByRut(rut);

  if (resultSetMascota && resultSetMascota.affectedRows > 0 && dueñoMascota) {
    return await setMascotasDueño(dueñoMascota.idDueño, mascota.idMascota);
  }

  return undefined;
};

export const updateMascotaService = async (mascota: Mascota) => {
  return await updateMascota(mascota);
};
