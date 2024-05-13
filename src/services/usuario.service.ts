import { Usuario } from '../models/Usuario';
import {
  getUser,
  getUsers,
  updatePassword,
} from '../repositories/usuario.repository';
import { encryptPassword } from '../utils/encryptPassword';

export const updatePasswordService = async (usuario: Usuario) => {
  usuario.password = await encryptPassword(usuario.password!);

  return await updatePassword(usuario);
};

export const getUserService = async (usuario: Usuario) => {
  return await getUser(usuario);
};

export const getUsersService = async () => {
  return await getUsers();
};
