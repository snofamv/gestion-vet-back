import { RecetaMascota } from '../models/RecetaMascota';
import {
  getRecetasMascotaByIdFichaIngreso,
  setRecetaFichaIngreso,
  setRecetaMascota,
  updateRecetaMascota,
} from '../repositories/recetaMascota.repository';
import { generarId } from '../utils/generarId';

export const setRecetaMascotaService = async (
  recetaMascota: RecetaMascota,
  idFichaIngreso: string,
) => {
  recetaMascota.idReceta = generarId();

  const resultsetRecetaMascota = await setRecetaMascota(recetaMascota);

  if (resultsetRecetaMascota && resultsetRecetaMascota.affectedRows > 0) {
    return await setRecetaFichaIngreso(recetaMascota.idReceta, idFichaIngreso);
  }
  return undefined;
};

export const updateRecetaMascotaService = async (
  recetaMascota: RecetaMascota,
) => {
  return await updateRecetaMascota(recetaMascota);
};

export const getRecetasMascotaByIdFichaIngresoService = async (
  idFichaIngreso: string,
) => {
  return await getRecetasMascotaByIdFichaIngreso(idFichaIngreso);
};
