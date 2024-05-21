import { ResultSetHeader } from 'mysql2';
import { pool } from '../config/db';
import { ErrorHandler } from '../middlewares/HandleError';
import { Insumo } from '../models/Insumo';
import { Insumo as InsumoMySQL } from '../models/InsumoMySQL';
import { Insumotratamiento } from '../models/InsumoTratamiento';

const promise = pool.promise();

export const getInsumos = async () => {
  try {
    const [rows] = await promise.query<InsumoMySQL[]>(`SELECT * FROM insumo ;`);

    return rows;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');
      newError.setStatus(500);
      newError.setInternalMessage('Surgió un error al obtener insumos');
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const setInsumo = async (insumo: Insumo) => {
  try {
    const [result] = await promise.query<ResultSetHeader>(
      `insert into insumo(insumo, stock, fechaCaducidad, valorUnitario) values(?,?,?,?) ;`,
      [
        insumo.insumo,
        insumo.stock,
        insumo.fechaCaducidad,
        insumo.valorUnitario,
      ],
    );

    return result;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');
      newError.setStatus(500);
      newError.setInternalMessage('Surgió un error al registrar insumo');
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const updateInsumo = async (insumo: Insumo) => {
  try {
    const [result] = await promise.query<ResultSetHeader>(
      `update insumo set insumo=?, stock=?, fechaCaducidad=?, valorUnitario=? where idInsumo=?;`,
      [
        insumo.insumo,
        insumo.stock,
        insumo.fechaCaducidad,
        insumo.valorUnitario,
        insumo.idInsumo,
      ],
    );

    return result;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');
      newError.setStatus(500);
      newError.setInternalMessage('Surgió un error al actualizar insumo');
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const getInsumosByIdFichaClinica = async (idFichaClinica: string) => {
  try {
    const [rows] = await promise.query<InsumoMySQL[]>(
      `SELECT insumo.idInsumo, insumo.insumo, insumo.stock, insumo.fechaCaducidad, insumo.valorUnitario, insumotratamiento.stockUsado, insumotratamiento.idInsumoTratamiento FROM insumo join insumotratamiento on insumo.idInsumo = insumotratamiento.idInsumo join tratamiento on insumotratamiento.idTratamiento = tratamiento.idTratamiento join tratamiento_mascota on tratamiento_mascota.idTratamiento = tratamiento.idTratamiento join fichaclinica on fichaclinica.idFichaClinica = tratamiento_mascota.idTratamiento where fichaClinica.idFichaClinica =? ;`,
      [idFichaClinica],
    );

    return rows;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');
      newError.setStatus(500);
      newError.setInternalMessage(
        'Surgió un error al obtener insumos por id ficha clinica',
      );
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const setInsumoTratamiento = async (
  insumoTratamiento: Insumotratamiento,
) => {
  try {
    const [result] = await promise.query<ResultSetHeader>(
      `insert into insumotratamiento(idInsumoTratamiento, idTratamiento, idInsumo, stockUsado) values(?,?,?) ;`,
      [
        insumoTratamiento.idTratamiento,
        insumoTratamiento.idInsumo,
        insumoTratamiento.stockUsado,
      ],
    );

    return result;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');
      newError.setStatus(500);
      newError.setInternalMessage(
        'Surgió un error al registrar insumo tratamiento',
      );
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const updateInsumoTratamiento = async (
  insumoTratamiento: Insumotratamiento,
) => {
  try {
    const [result] = await promise.query<ResultSetHeader>(
      `update insumoTratamiento set stockUsado=? where idInsumoTratamiento = ?;`,
      [insumoTratamiento.stockUsado, insumoTratamiento.idInsumoTratamiento],
    );

    return result;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');
      newError.setStatus(500);
      newError.setInternalMessage(
        'Surgió un error al actualizar insumo tratamiento',
      );
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};
