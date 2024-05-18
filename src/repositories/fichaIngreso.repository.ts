import { ResultSetHeader } from 'mysql2';
import { pool } from '../config/db';
import { FichaIngreso } from '../models/FichaIngreso';
import { FichaIngreso as FichaIngresoMySQL } from '../models/FichaIngresoMySQL';
import { ErrorHandler } from '../middlewares/HandleError';
import { FichaIngresoResult } from '../models/FichaIngresoResult';

const promise = pool.promise();

export const setFichaIngreso = async (fichaIngreso: FichaIngreso) => {
  try {
    const [result] = await promise.query<FichaIngresoResult>(
      `insert into fichaingreso(idFichaIngreso, sintomas, antecedentes, fechaAlta, fechaIngreso, diagnostico, observaciones, temperatura, idEstados, idFichaClinica) values(?,?,?,?,?,?,?,?,?,?);`,
      [
        fichaIngreso.idFichaIngreso,
        fichaIngreso.sintomas,
        fichaIngreso.antecedentes,
        fichaIngreso.fechaAlta,
        fichaIngreso.fechaIngreso,
        fichaIngreso.diagnostico,
        fichaIngreso.observaciones,
        fichaIngreso.temperatura,
        fichaIngreso.idEstados,
        fichaIngreso.idFichaClinica,
      ],
    );

    if (result.affectedRows > 0) {
      result.idFichaIngreso = fichaIngreso.idFichaIngreso;
    }

    return result;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');

      console.log(err.message);

      newError.setStatus(500);
      newError.setInternalMessage('Surgió un error al registrar ficha ingreso');
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const updateFichaIngreso = async (fichaIngreso: FichaIngreso) => {
  try {
    const [result] = await promise.query<ResultSetHeader>(
      `update fichaingreso set sintomas=?, antecedentes=?, fechaAlta=?, fechaIngreso=?, diagnostico=?, observaciones=?, temperatura=?, idEstados=? where idFichaIngreso=?`,
      [
        fichaIngreso.sintomas,
        fichaIngreso.antecedentes,
        fichaIngreso.fechaAlta,
        fichaIngreso.fechaIngreso,
        fichaIngreso.diagnostico,
        fichaIngreso.observaciones,
        fichaIngreso.temperatura,
        fichaIngreso.idEstados,
        fichaIngreso.idFichaIngreso,
      ],
    );

    return result;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');

      console.log(err.message);

      newError.setStatus(500);
      newError.setInternalMessage(
        'Surgió un error al actualizar ficha ingreso',
      );
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const getFichaIngresoByIdFichaClinica = async (
  idFichaClinica: string,
) => {
  try {
    const [rows] = await promise.query<FichaIngresoMySQL[]>(
      `select * from fichaingreso where idFichaClinica = ?;`,
      [idFichaClinica],
    );

    return rows[0];
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');

      console.log(err.message);

      newError.setStatus(500);
      newError.setInternalMessage(
        'Surgió un error al obtener ficha ingreso por idFichaClinica',
      );
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const getFichaIngresoByIdFichaIngreso = async (
  idFichaIngreso: string,
) => {
  try {
    const [rows] = await promise.query<FichaIngresoMySQL[]>(
      `select * from fichaingreso where idFichaIngreso = ?;`,
      [idFichaIngreso],
    );

    return rows[0];
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');

      console.log(err.message);

      newError.setStatus(500);
      newError.setInternalMessage(
        'Surgió un error al obtener ficha ingreso por idFichaIngreso',
      );
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};
