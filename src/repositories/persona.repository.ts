import { ResultSetHeader } from 'mysql2';
import { pool } from '../config/db';
import { ErrorHandler } from '../middlewares/HandleError';
import { Persona } from '../models/Persona';
import { Persona as PersonaMySQL } from '../models/PersonaMySQL';
import { PersonaResult } from '../models/PersonaResult';

const promise = pool.promise();

export const getPersonaByEmail = async (email: string) => {
  try {
    const [rows] = await promise.query<PersonaMySQL[]>(
      `SELECT * FROM persona WHERE persona.email = ? ;`,
      [email],
    );

    return rows[0];
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');
      newError.setStatus(500);
      newError.setInternalMessage('Surgió un error al obtener persona');
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const getPersonaByRut = async (rut: number) => {
  try {
    console.log(rut);

    const [rows] = await promise.query<PersonaMySQL[]>(
      `SELECT * FROM persona WHERE persona.rut = ? ;`,
      [rut],
    );

    return rows[0];
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');
      newError.setStatus(500);
      newError.setInternalMessage('Surgió un error al obtener persona');
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const getPersonas = async () => {
  try {
    const [rows] = await promise.query<PersonaMySQL[]>(
      `SELECT * FROM persona ; `,
    );

    return rows;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');
      newError.setStatus(500);
      newError.setInternalMessage('Surgió un error al obtener personas');
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const setPersona = async (persona: Persona) => {
  try {
    const [result] = await promise.query<PersonaResult>(
      `insert into persona(idPersona, nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, rut, dv, sexo, telefono, direccion, email) 
        VALUES(?,?,?,?,?,?,?,?,?,?,?);`,
      [
        persona.idPersona,
        persona.nombre,
        persona.apellidoPaterno,
        persona.apellidoMaterno,
        persona.fechaNacimiento,
        persona.rut,
        persona.dv,
        persona.sexo,
        persona.telefono,
        persona.direccion,
        persona.email,
      ],
    );

    if (result.affectedRows > 0) {
      result.idPersona = persona.idPersona;
    }

    return result;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');

      console.log(err.message);

      newError.setStatus(500);
      newError.setInternalMessage('Surgió un error al registrar persona');
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const updatePersona = async (persona: Persona) => {
  try {
    const [result] = await promise.query<ResultSetHeader>(
      `update persona set nombre=?, apellidoPaterno=?, apellidoMaterno=?, fechaNacimiento=?, rut=?, dv=?, sexo=?, telefono=?, direccion=?, email=? where idPersona=?`,
      [
        persona.nombre,
        persona.apellidoPaterno,
        persona.apellidoMaterno,
        persona.fechaNacimiento,
        persona.rut,
        persona.dv,
        persona.sexo,
        persona.telefono,
        persona.direccion,
        persona.email,
        persona.idPersona,
      ],
    );

    return result;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');

      console.log(err.message);

      newError.setStatus(500);
      newError.setInternalMessage('Surgió un error al registrar persona');
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const getPersonaByNombreUsuario = async (nombreUsuario: string) => {
  try {
    const [rows] = await promise.query<PersonaMySQL[]>(
      `SELECT persona.idPersona, persona.nombre, persona.apellidoPaterno, persona.apellidoMaterno, persona.fechaNacimiento, persona.rut, persona.dv, persona.sexo, persona.telefono, persona.direccion, persona.email FROM empleado join usuario on empleado.idEmpleado=usuario.idEmpleado
      join persona on persona.idPersona= empleado.idPersona WHERE usuario.nombreUsuario = ? ;`,
      [nombreUsuario],
    );

    return rows[0];
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');
      newError.setStatus(500);
      newError.setInternalMessage('Surgió un error al obtener persona');
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};
