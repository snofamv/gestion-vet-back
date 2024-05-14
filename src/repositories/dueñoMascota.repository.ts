import { ResultSetHeader } from 'mysql2';
import { pool } from '../config/db';
import { ErrorHandler } from '../middlewares/HandleError';
import { DueñoMascota as DueñoMascotaMySQL } from '../models/DueñoMascotaMySQL';
import { DueñoMascota } from '../models/DueñoMascota';
import { Persona as PersonaMySQL } from '../models/PersonaMySQL';
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

export const getDueñosMascotas = async () => {
  try {
    const [rows] = await promise.query<PersonaMySQL[]>(
      //   `select persona.idPersona, persona.nombre, persona.apellidoPaterno, persona.apellidoMaterno, persona.fechaNacimiento, persona.rut, persona.dv, persona.sexo, persona.telefono, persona.direccion, persona.email from persona join dueño_mascota on persona.idPersona = dueño_mascota.idPersona;`,
      `select * from persona join dueño_mascota on persona.idPersona = dueño_mascota.idPersona;`,
    );

    console.log(rows);

    return rows;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');

      console.log(err.message);

      newError.setStatus(500);
      newError.setInternalMessage(
        'Surgió un error al obtener dueños de mascotas',
      );
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const getDueñoMascotaByRut = async (rut: number) => {
  try {
    const [rows] = await promise.query<PersonaMySQL[]>(
      `select persona.idPersona, persona.nombre, persona.apellidoPaterno, persona.apellidoMaterno, persona.fechaNacimiento, persona.rut, persona.dv, persona.sexo, persona.telefono, persona.direccion, persona.email from persona join dueño_mascota on dueño_mascota.idPersona=persona.idPersona where persona.rut=?`,
      [rut],
    );

    return rows[0];
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');

      console.log(err.message);

      newError.setStatus(500);
      newError.setInternalMessage(
        'Surgió un error al obtener dueño de mascotas por rut',
      );
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const getDueñoByRut = async (rut: number) => {
  try {
    const [rows] = await promise.query<DueñoMascotaMySQL[]>(
      `select dueño_mascota.idDueño, dueño_mascota.idPersona from persona join dueño_mascota on dueño_mascota.idPersona=persona.idPersona where persona.rut=?`,
      [rut],
    );

    return rows[0];
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');

      console.log(err.message);

      newError.setStatus(500);
      newError.setInternalMessage(
        'Surgió un error al obtener idDueño de mascota por rut',
      );
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const setMascotasDueño = async (idDueño: string, idMascota: string) => {
  try {
    const [result] = await promise.query<ResultSetHeader>(
      `insert into mascotas_dueño(idDueño, idMascota) values(?,?)`,
      [idDueño, idMascota],
    );

    return result;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');

      console.log(err.message);

      newError.setStatus(500);
      newError.setInternalMessage(
        'Surgió un error al registrar en tabla mascotas_dueño',
      );
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};
