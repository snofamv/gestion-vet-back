import { pool } from '../config/db';
import { Usuario } from '../models/Usuario';
import { Usuario as UsuarioMySQL } from '../models/UsuarioMySQL';
import { ErrorHandler } from '../middlewares/HandleError';
import { UsuarioResult } from '../models/UsuarioResult';
import { ResultSetHeader } from 'mysql2';
const promise = pool.promise();

export const getUser = async (usuario: Usuario) => {
  try {
    const [rows] = await promise.query<UsuarioMySQL[]>(
      `SELECT * FROM usuario WHERE usuario.nombreUsuario = ? ;`,
      [usuario.nombreUsuario],
    );

    return rows[0];
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');
      newError.setStatus(500);
      newError.setInternalMessage('Surgió un error al obtener usuario');
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const getUsers = async () => {
  try {
    const [rows] = await promise.query<UsuarioMySQL[]>(
      `SELECT * FROM usuario  ;`,
    );

    return rows;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');
      newError.setStatus(500);
      newError.setInternalMessage('Surgió un error al obtener usuario');
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const setUser = async (usuario: Usuario) => {
  try {
    const [result] = await promise.query<UsuarioResult>(
      `insert into usuario(idUsuario, idEmpleado, password, nombreUsuario) values(?,?,?,?);`,
      [
        usuario.idUsuario,
        usuario.idEmpleado,
        usuario.password,
        usuario.nombreUsuario,
      ],
    );

    if (result.affectedRows > 0) {
      result.nombreUsuario = usuario.nombreUsuario;
    }

    return result;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');
      newError.setStatus(500);
      newError.setInternalMessage('Surgió un error al registrar usuario');
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};

export const updatePassword = async (usuario: Usuario) => {
  try {
    const [result] = await promise.query<ResultSetHeader>(
      `update usuario set password=? where nombreUsuario=? `,
      [usuario.password, usuario.nombreUsuario],
    );

    return result;
  } catch (err) {
    if (err instanceof Error) {
      const newError = new ErrorHandler('Se ha producido un error interno.');
      newError.setStatus(500);
      newError.setInternalMessage(
        'Surgió un error al actualizar contraseña usuario',
      );
      newError.setDetailsError(err.message);
      throw newError;
    }
  }
};
