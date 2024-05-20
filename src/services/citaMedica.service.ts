import { CitaMedica } from '../models/CitaMedica';
import {
  getCitasMedicas,
  getCitasMedicasByIdMascota,
  getCitasMedicasByRut,
  setCitaMedica,
  updateCitaMedica,
} from '../repositories/citaMedica.repository';
import { generarId } from '../utils/generarId';

export const setCitaMedicaService = async (citaMedica: CitaMedica) => {
  citaMedica.idCitaMedica = generarId();
  return await setCitaMedica(citaMedica);
};

export const updateCitaMedicaService = async (citaMedica: CitaMedica) => {
  return await updateCitaMedica(citaMedica);
};

export const getCitasMedicasByIdMascotaService = async (idMascota: string) => {
  return await getCitasMedicasByIdMascota(idMascota);
};

export const getCitasMedicasByRutService = async (rut: number) => {
  return await getCitasMedicasByRut(rut);
};

export const getCitasMedicasService = async () => {
  return await getCitasMedicas();
};
