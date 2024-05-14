import { DueñoMascota } from '../models/DueñoMascota';
import { Persona } from '../models/Persona';
import {
  getDueñoMascotaByRut,
  getDueñosMascotas,
  setDueñoMascota,
} from '../repositories/dueñoMascota.repository';
import { setPersona } from '../repositories/persona.repository';
import { generarId } from '../utils/generarId';

export const setDueñoMascotaService = async (persona: Persona) => {
  persona.idPersona = generarId();

  const result = await setPersona(persona);

  if (result && result.affectedRows > 0) {
    const dueñoMascota: DueñoMascota = {
      idDueño: generarId(),
      idPersona: result.idPersona,
    };

    return await setDueñoMascota(dueñoMascota);
  }

  return null;
};

export const getDueñosMascotasService = async () => {
  return await getDueñosMascotas();
};

export const getDueñoMascotaByRutService = async (rut: number) => {
  return await getDueñoMascotaByRut(rut);
};
