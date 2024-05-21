import { Especialidad } from '../models/EspecialidadMySQL';
import {
  getEspecialidades,
  setEspecialidad,
  updateEspecialidad,
} from '../repositories/especialidad.repository';

export const getEspecialidadesService = async () => {
  return await getEspecialidades();
};

export const setEspecialidadService = async (especialidad: Especialidad) => {
  return await setEspecialidad(especialidad);
};

export const updateEspecialidadService = async (especialidad: Especialidad) => {
  return await updateEspecialidad(especialidad);
};
