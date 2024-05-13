import { ResultSetHeader } from 'mysql2';
import { pool } from '../config/db';
import { ErrorHandler } from '../middlewares/HandleError';
import { Empleado } from '../models/Empleado';
import { Empleado as EmpleadoMySql } from '../models/EmpleadoMySQL';
import { EmpleadoResult } from '../models/EmpleadoResult';
const promise = pool.promise();

export const setEmpleado = async (empleado: Empleado) => {
  try {
    const [result] = await promise.query<EmpleadoResult>(
      `insert into empleado(idEmpleado,idEspecialidad, codMedico, idPersona, idCargo, idEstadoEmpleado, fechaIngreso, fechaSalida) values(?,?,?,?,?,?,?,?);`,
      [
        empleado.idEmpleado,
        empleado.idEspecialidad,
        empleado.codMedico,
        empleado.idPersona,
        empleado.idCargo,
        empleado.idEstadoEmpleado,
        empleado.fechaIngreso,
        empleado.fechaSalida,
      ],
    );

    if (result.affectedRows > 0) {
      result.idEmpleado = empleado.idEmpleado;
    }

    return result;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');

      console.log(err.message);

      newError.setStatus(500);
      newError.setInternalMessage('Surgió un error al registrar empleado');
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const getEmpleadoByRut = async (rut: number) => {
  try {
    console.log(rut);

    const [rows] = await promise.query<EmpleadoMySql[]>(
      `SELECT * FROM empleado join persona on empleado.idPersona=persona.idPersona WHERE persona.rut = ? ;`,
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

export const getEmpleadoByNombreUsuario = async (nombreUsuario: string) => {
  try {
    const [rows] = await promise.query<EmpleadoMySql[]>(
      `SELECT empleado.idEmpleado, empleado.codMedico, empleado.fechaIngreso, empleado.fechaSalida, empleado.idPersona, empleado.idCargo, empleado.idEstadoEmpleado, empleado.idEspecialidad FROM empleado join usuario on empleado.idEmpleado=usuario.idEmpleado WHERE usuario.nombreUsuario = ? ;`,
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

export const updateEmpleado = async (empleado: Empleado) => {
  try {
    const [result] = await promise.query<ResultSetHeader>(
      `update empleado set codMedico=? , fechaIngreso=? , fechaSalida=? , idCargo=?, idEstadoEmpleado=?, idEspecialidad=?  where idEmpleado=? `,
      [
        empleado.codMedico,
        empleado.fechaIngreso,
        empleado.fechaSalida,
        empleado.idCargo,
        empleado.idEstadoEmpleado,
        empleado.idEspecialidad,
        empleado.idEmpleado,
      ],
    );

    return result;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');
      newError.setStatus(500);
      newError.setInternalMessage('Surgió un error al actualizar empleado');
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const getEmpleadoByIdPersona = async (idPersona: string) => {
  try {
    const [rows] = await promise.query<EmpleadoMySql[]>(
      `SELECT * FROM empleado join persona on empleado.idPersona=persona.idPersona WHERE empleado.idPersona = ? ;`,
      [idPersona],
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

export const getEmpleados = async () => {
  try {
    const [rows] = await promise.query<EmpleadoMySql[]>(
      `SELECT * FROM empleado  ;`,
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
