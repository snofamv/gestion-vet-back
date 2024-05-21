import { pool } from '../config/db';
import { ErrorHandler } from '../middlewares/HandleError';
import { CitaMedica } from '../models/CitaMedica';
import { CitaMedica as CitaMedicaMySQL } from '../models/CitaMedicaMySQL';
import { CitaMedicaResult } from '../models/CitaMedicaResult';

const promise = pool.promise();

export const setCitaMedica = async (CitaMedica: CitaMedica) => {
  try {
    const [result] = await promise.query<CitaMedicaResult>(
      `insert into citaMedica(idCitaMedica, fechaCitaMedica, horaCitaMedica, idMascota, idEstadoCita) values(?,?,?,?,?);`,
      [
        CitaMedica.idCitaMedica,
        CitaMedica.fechaCitaMedica,
        CitaMedica.horaCitaMedica,
        CitaMedica.idMascota,
        CitaMedica.idEstadoCita,
      ],
    );

    if (result.affectedRows > 0) {
      result.idCitaMedica = CitaMedica.idCitaMedica;
    }

    return result;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');

      console.log(err.message);

      newError.setStatus(500);
      newError.setInternalMessage('Surgió un error al registrar cita medica');
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const updateCitaMedica = async (CitaMedica: CitaMedica) => {
  try {
    const [result] = await promise.query<CitaMedicaResult>(
      `update citaMedica set fechaCitaMedica =?, horaCitaMedica=?, idEstadoCita=? where idCitaMedica=?`,
      [
        CitaMedica.fechaCitaMedica,
        CitaMedica.horaCitaMedica,
        CitaMedica.idEstadoCita,
        CitaMedica.idCitaMedica,
      ],
    );
    return result;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');

      console.log(err.message);

      newError.setStatus(500);
      newError.setInternalMessage('Surgió un error al actualizar cita medica');
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const getCitasMedicasByIdMascota = async (idMascota: string) => {
  try {
    const [rows] = await promise.query<CitaMedicaMySQL[]>(
      `select citaMedica.idCitaMedica, citaMedica.fechaCitaMedica, citaMedica.horaCitaMedica, citaMedica.idMascota, citaMedica.idEstadoCita from citaMedica join fichaClinica on fichaClinica.idCitaMedica = citaMedica.idCitaMedica where fichaClinica.idMascota = ?;`,
      [idMascota],
    );
    return rows;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');

      console.log(err.message);

      newError.setStatus(500);
      newError.setInternalMessage(
        'Surgió un error al obtener citas Medicas por id mascota',
      );
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const getCitasMedicasByRut = async (rut: number) => {
  try {
    const [rows] = await promise.query<CitaMedicaMySQL[]>(
      `select citaMedica.idCitaMedica, citaMedica.fechaCitaMedica, citaMedica.horaCitaMedica, citaMedica.idMascota, citaMedica.idEstadoCita from citaMedica join fichaClinica on fichaClinica.idCitaMedica = citaMedica.idCitaMedica join mascota on fichaClinica.idMascota = mascota.idMascota join mascotas_dueño on mascotas_dueño.idMascota = mascota.idMascota join dueño_mascota on dueño_mascota.idDueño = mascotas_dueño.idDueño join persona dueño_mascota.idPersona = persona.idPersona where persona.rut = ?;`,
      [rut],
    );
    return rows;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');

      console.log(err.message);

      newError.setStatus(500);
      newError.setInternalMessage(
        'Surgió un error al obtener citas Medicas por rut dueño',
      );
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const getCitasMedicas = async () => {
  try {
    const [rows] = await promise.query<CitaMedicaMySQL[]>(
      `select * from citaMedica;`,
    );
    return rows;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');

      console.log(err.message);

      newError.setStatus(500);
      newError.setInternalMessage('Surgió un error al obtener citas Medicas');
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};
