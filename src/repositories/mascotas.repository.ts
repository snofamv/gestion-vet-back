import { ResultSetHeader } from 'mysql2';
import { pool } from '../config/db';
import { ErrorHandler } from '../middlewares/HandleError';
import { Mascota, Mascota as MascotaMySQL } from '../models/MascotaMySQL';
import { MascotaResult } from '../models/MascotaResult';

const promise = pool.promise();

export const getMascotas = async () => {
  try {
    const [rows] = await promise.query<MascotaMySQL[]>(
      `select * from mascota;`,
    );

    return rows;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');
      newError.setStatus(500);
      newError.setInternalMessage('Surgió un error al obtener mascotas');
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const getMascotasByRut = async (rut: number) => {
  try {
    const [rows] = await promise.query<MascotaMySQL[]>(
      `select mascota.idMascota, mascota.nombreMascota, mascota.especie, mascota.raza,mascota.genero, mascota.edadMascota from mascota join mascotas_dueño on mascotas_dueño.idMascota = mascota.idMascota join dueño_mascota on mascotas_dueño.idDueño = dueño_mascota.idDueño join persona on persona.idPersona = dueño_mascota.idPersona where persona.rut=?;`,
      [rut],
    );

    return rows;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');
      newError.setStatus(500);
      newError.setInternalMessage(
        'Surgió un error al obtener mascotas por rut',
      );
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const getMascota = async (idMascota: string) => {
  try {
    const [rows] = await promise.query<MascotaMySQL[]>(
      `select mascota.idMascota, mascota.nombreMascota, mascota.especie, mascota.raza,mascota.genero, mascota.edadMascota from mascota where mascota.idMascota=?;`,
      [idMascota],
    );

    return rows[0];
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');
      newError.setStatus(500);
      newError.setInternalMessage('Surgió un error al obtener mascotas por id');
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const setMascota = async (mascota: Mascota) => {
  try {
    const [result] = await promise.query<MascotaResult>(
      `insert into mascota(idMascota, nombreMascota, especie, raza, genero, edadMascota) values(?,?,?,?,?,?);`,
      [
        mascota.idMascota,
        mascota.nombreMascota,
        mascota.especie,
        mascota.raza,
        mascota.genero,
        mascota.edadMascota,
      ],
    );

    if (result.affectedRows > 0) {
      result.idMascota = mascota.idMascota;
    }

    return result;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');
      newError.setStatus(500);
      newError.setInternalMessage('Surgió un error al obtener mascotas por id');
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const updateMascota = async (mascota: Mascota) => {
  try {
    const [result] = await promise.query<ResultSetHeader>(
      `update mascota set nombreMascota=?, especie=?, raza=?, genero=?, edadMascota=? where idMascota=?`,
      [
        mascota.nombreMascota,
        mascota.especie,
        mascota.raza,
        mascota.genero,
        mascota.edadMascota,
        mascota.idMascota,
      ],
    );

    return result;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');
      newError.setStatus(500);
      newError.setInternalMessage('Surgió un error al actualizar mascota');
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};
