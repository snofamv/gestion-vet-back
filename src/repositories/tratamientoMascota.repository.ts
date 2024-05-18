import { ResultSetHeader } from 'mysql2';
import { pool } from '../config/db';
import { TratamientoMascota } from '../models/TratamientoMascota';
import { TratamientoMascota as TratamientoMascotaMySQL } from '../models/TratamientoMascotaMySQL';
import { ErrorHandler } from '../middlewares/HandleError';
import { tratamientoResult } from '../models/TratamientoResult';

const promise = pool.promise();

export const setTratamientoMascota = async (
  tratamientoMascota: TratamientoMascota,
) => {
  try {
    const [result] = await promise.query<tratamientoResult>(
      `insert into tratamiento(idTratamiento, descripcion, fecha, tipo, costo) values(?,?,?,?,?);`,
      [
        tratamientoMascota.idTratamiento,
        tratamientoMascota.descripcion,
        tratamientoMascota.fecha,
        tratamientoMascota.tipo,
        tratamientoMascota.costo,
      ],
    );

    if (result.affectedRows > 0) {
      result.idTratamiento = tratamientoMascota.idTratamiento;
    }

    return result;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');

      console.log(err.message);

      newError.setStatus(500);
      newError.setInternalMessage('Surgió un error al registrar tratamiento');
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const setTratamientosMascotas = async (
  idFichaClinica: string,
  idTratamiento: string,
) => {
  try {
    const [result] = await promise.query<tratamientoResult>(
      `insert into tratamiento_mascota(idFichaClinica, idTratamiento) values(?,?);`,
      [idFichaClinica, idTratamiento],
    );

    if (result.affectedRows > 0) {
      result.idTratamiento = idTratamiento;
    }

    return result;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');

      console.log(err.message);

      newError.setStatus(500);
      newError.setInternalMessage(
        'Surgió un error al registrar tratamiento en tabla tratamiento_mascota',
      );
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const updateTratamientoMascota = async (
  tratamientoMascota: TratamientoMascota,
) => {
  try {
    const [result] = await promise.query<ResultSetHeader>(
      `update tratamiento set descripcion=?, fecha=?, tipo=?, costo=? where idTratamiento=?`,
      [
        tratamientoMascota.descripcion,
        tratamientoMascota.fecha,
        tratamientoMascota.tipo,
        tratamientoMascota.costo,
        tratamientoMascota.idTratamiento,
      ],
    );
    return result;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');

      console.log(err.message);

      newError.setStatus(500);
      newError.setInternalMessage('Surgió un error al actualizar tratamiento');
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const getTratamientosMascotas = async (idFichaClinica: string) => {
  try {
    const [rows] = await promise.query<TratamientoMascotaMySQL[]>(
      `select tratamiento.idTratamiento,tratamiento.descripcion, tratamiento.fecha, tratamiento.tipo, tratamiento.costo from tratamiento join tratamiento_mascota on tratamiento_mascota.idTratamiento = tratamiento.idTratamiento join fichaclinica on fichaclinica.idFichaClinica = tratamiento_mascota.idFichaClinica where fichaclinica.idFichaClinica = ?`,
      [idFichaClinica],
    );

    return rows;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');

      console.log(err.message);

      newError.setStatus(500);
      newError.setInternalMessage(
        'Surgió un error al obtener tratamientos mascotas',
      );
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const getTratamientoMascota = async (idTratamiento: string) => {
  try {
    const [rows] = await promise.query<TratamientoMascotaMySQL[]>(
      `select * from tratamiento where idTratamiento=?;`,
      [idTratamiento],
    );

    return rows[0];
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');

      console.log(err.message);

      newError.setStatus(500);
      newError.setInternalMessage(
        'Surgió un error al obtener tratamiento mascota',
      );
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};
