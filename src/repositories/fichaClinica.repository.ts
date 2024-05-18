import { ResultSetHeader } from 'mysql2';
import { pool } from '../config/db';
import { ErrorHandler } from '../middlewares/HandleError';
import { FichaClinica } from '../models/FichaClinica';
import { FichaClinica as FichaClinicaMySQL } from '../models/FichaClinicaMySQL';
import { FichaClinicaResult } from '../models/FichaClinicaResult';

const promise = pool.promise();

export const getFichasClinicas = async () => {
  try {
    const [rows] = await promise.query<FichaClinicaMySQL[]>(
      `select * from fichaclinica;`,
    );

    return rows;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');

      console.log(err.message);

      newError.setStatus(500);
      newError.setInternalMessage('Surgió un error al obtener fichas clinicas');
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const setFichaClinica = async (fichaClinica: FichaClinica) => {
  try {
    const [result] = await promise.query<FichaClinicaResult>(
      `insert into fichaclinica(idFichaClinica, fechaIngreso, enfermedades, peso, observaciones, antecedentes, idMascota, idCitaMedica) values(?,?,?,?,?,?,?,?);`,
      [
        fichaClinica.idFichaClinica,
        fichaClinica.fechaIngreso,
        fichaClinica.enfermedades,
        fichaClinica.peso,
        fichaClinica.observaciones,
        fichaClinica.antecedentes,
        fichaClinica.idMascota,
        fichaClinica.idCitaMedica,
      ],
    );

    if (result.affectedRows > 0) {
      result.idFichaClinica = fichaClinica.idFichaClinica;
    }

    return result;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');

      console.log(err.message);

      newError.setStatus(500);
      newError.setInternalMessage('Surgió un error al registrar ficha clinica');
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const updateFichaClinica = async (fichaClinica: FichaClinica) => {
  try {
    const [result] = await promise.query<ResultSetHeader>(
      `update fichaclinica set fechaIngreso=?, enfermedades=?, peso=?, observaciones=?, antecedentes=?
      where idFichaClinica=?`,
      [
        fichaClinica.fechaIngreso,
        fichaClinica.enfermedades,
        fichaClinica.peso,
        fichaClinica.observaciones,
        fichaClinica.antecedentes,
        fichaClinica.idFichaClinica,
      ],
    );

    return result;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');

      console.log(err.message);

      newError.setStatus(500);
      newError.setInternalMessage('Surgió un error al obtener fichas clinicas');
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const getFichasClinicasByIdMascota = async (idMascota: string) => {
  try {
    const [rows] = await promise.query<FichaClinicaMySQL[]>(
      `select * from fichaclinica where idMascota=?;`,
      [idMascota],
    );

    return rows;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');

      console.log(err.message);

      newError.setStatus(500);
      newError.setInternalMessage(
        'Surgió un error al obtener ficha clinica por idMascota',
      );
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const getFichasClinicasByRutDueño = async (rut: number) => {
  try {
    const [rows] = await promise.query<FichaClinicaMySQL[]>(
      `select fichaClinica.idFichaClinica, fichaClinica.fechaIngreso, fichaClinica.enfermedades, fichaClinica.peso, fichaClinica.observaciones, fichaClinica.antecedentes, fichaClinica.idMascota, fichaClinica.idCitaMedica from fichaclinica join mascota on mascota.idMascota = fichaClinica.idMascota join mascotas_dueño on mascotas_dueño.idMascota = mascota.idMascota join dueño_mascota on mascotas_dueño.idDueño = dueño_mascota.idDueño join persona on dueño_mascota.idPersona = persona.idPersona where persona.rut=?;`,
      [rut],
    );

    return rows;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');

      console.log(err.message);

      newError.setStatus(500);
      newError.setInternalMessage(
        'Surgió un error al obtener fichas clinicas por rut',
      );
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const getFichaClinicaByIdFichaClinica = async (
  idFichaClinica: string,
) => {
  try {
    const [rows] = await promise.query<FichaClinicaMySQL[]>(
      `select * from fichaclinica where idFichaClinica=?;`,
      [idFichaClinica],
    );

    return rows;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');

      console.log(err.message);

      newError.setStatus(500);
      newError.setInternalMessage(
        'Surgió un error al obtener ficha clinica por idFichaClinica',
      );
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};
