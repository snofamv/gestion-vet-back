import { ResultSetHeader } from 'mysql2';
import { pool } from '../config/db';
import { RecetaMascota } from '../models/RecetaMascota';
import { ErrorHandler } from '../middlewares/HandleError';

const promise = pool.promise();

export const setRecetaMascota = async (recetaMascota: RecetaMascota) => {
  try {
    const [result] = await promise.query<ResultSetHeader>(
      `insert into receta(idReceta, descripcion, medico, vigencia, fechaEmision, retieneReceta) values(?,?,?,?,?,?);`,
      [
        recetaMascota.idReceta,
        recetaMascota.descripcion,
        recetaMascota.medico,
        recetaMascota.vigencia,
        recetaMascota.fechaEmision,
        recetaMascota.retieneReceta,
      ],
    );
    return result;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');

      console.log(err.message);

      newError.setStatus(500);
      newError.setInternalMessage('Surgió un error al registrar receta medica');
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const updateRecetaMascota = async (recetaMascota: RecetaMascota) => {
  try {
    const [result] = await promise.query<ResultSetHeader>(
      `update receta set descripcion=?, medico=?, vigencia=?, fechaEmision=?, retieneReceta=? where idReceta=?`,
      [
        recetaMascota.descripcion,
        recetaMascota.medico,
        recetaMascota.vigencia,
        recetaMascota.fechaEmision,
        recetaMascota.retieneReceta,

        recetaMascota.idReceta,
      ],
    );
    return result;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');

      console.log(err.message);

      newError.setStatus(500);
      newError.setInternalMessage(
        'Surgió un error al actualizar receta medica',
      );
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const setRecetaFichaIngreso = async (
  idReceta: string,
  idFichaIngreso: string,
) => {
  try {
    const [result] = await promise.query<ResultSetHeader>(
      `insert into receta_ficha(idReceta, idFichaIngreso) values(?,?);`,
      [idReceta, idFichaIngreso],
    );
    return result;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');

      console.log(err.message);

      newError.setStatus(500);
      newError.setInternalMessage('Surgió un error al registrar receta ficha');
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const getRecetasMascotaByIdFichaIngreso = async (
  idFichaIngreso: string,
) => {
  try {
    const [result] = await promise.query<ResultSetHeader>(
      `select receta.idReceta, receta.descripcion, receta.medico, receta.vigencia, receta.fechaEmision, receta.retieneReceta from receta join receta_ficha on receta.idReceta = receta_ficha.idReceta join fichaIngreso on receta_ficha.idFichaIngreso = fichaingreso.idFichaIngreso where fichaingreso.idFichaIngreso = ?`,
      [idFichaIngreso],
    );
    return result;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');

      console.log(err.message);

      newError.setStatus(500);
      newError.setInternalMessage(
        'Surgió un error al obtener recetas mascota por idFichaIngreso',
      );
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};
