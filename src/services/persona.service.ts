import { Persona } from '../models/Persona';
import {
  getPersonaByNombreUsuario,
  getPersonaByRut,
  getPersonas,
  setPersona,
  updatePersona,
} from '../repositories/persona.repository';
import { generarId } from '../utils/generarId';

export const setPersonaService = async (persona: Persona) => {
  persona.idPersona = generarId();

  return await setPersona(persona);
};

export const updatePersonaService = async (persona: Persona) => {
  return await updatePersona(persona);
};

export const getPersonaByRutService = async (rut: number) => {
  return await getPersonaByRut(rut);
};

export const getPersonaByNombreUsuarioService = async (
  nombreUsuario: string,
) => {
  return await getPersonaByNombreUsuario(nombreUsuario);
};

export const getPersonasService = async () => {
  return await getPersonas();
};
