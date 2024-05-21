import { ResultSetHeader } from 'mysql2';
import { pool } from '../config/db';
import { ErrorHandler } from '../middlewares/HandleError';
import {
  Especialidad,
  Especialidad as EspecialidadMySQL,
} from '../models/EspecialidadMySQL';

const promise = pool.promise();

export const getEspecialidades = async () => {
  try {
    const [rows] = await promise.query<EspecialidadMySQL[]>(
      `SELECT * FROM especialidad ;`,
    );

    return rows;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');
      newError.setStatus(500);
      newError.setInternalMessage('Surgió un error al obtener especialidades');
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const setEspecialidad = async (especialidad: Especialidad) => {
  try {
    const [result] = await promise.query<ResultSetHeader>(
      `insert into especialidad(tipo) values(?);`,
      [especialidad.tipo],
    );

    return result;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');
      newError.setStatus(500);
      newError.setInternalMessage('Surgió un error al registrar especialidad');
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const updateEspecialidad = async (especialidad: Especialidad) => {
  try {
    const [result] = await promise.query<ResultSetHeader>(
      `update especialidad set tipo=? where idEspecialidad =?`,
      [especialidad.tipo, especialidad.idEspecialidad],
    );

    return result;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');
      newError.setStatus(500);
      newError.setInternalMessage('Surgió un error al registrar especialidad');
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};
