import { ResultSetHeader } from 'mysql2';
import { pool } from '../config/db';
import { ErrorHandler } from '../middlewares/HandleError';
import { DueñoMascota } from '../models/DueñoMascota';
const promise = pool.promise();

export const setDueñoMascota = async (dueñoMascota: DueñoMascota) => {
  try {
    const [result] = await promise.query<ResultSetHeader>(
      `insert into dueño_mascota(idDueño, idPersona) values(?,?)`,
      [dueñoMascota.idDueño, dueñoMascota.idPersona],
    );

    return result;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');

      console.log(err.message);

      newError.setStatus(500);
      newError.setInternalMessage(
        'Surgió un error al registrar en tabla dueño_mascota',
      );
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};
