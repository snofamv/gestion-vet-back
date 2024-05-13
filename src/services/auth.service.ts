import { Usuario as UsuarioMySQL } from '../models/UsuarioMySQL';
import { Usuario } from '../models/Usuario';

import { getUser, setUser } from '../repositories/usuario.repository';
import { Empleado } from '../models/Empleado';
import { Persona } from '../models/Persona';
import { encryptPassword } from '../utils/encryptPassword';
import { setEmpleadoService } from './empleado.service';
import { setPersonaService } from './persona.service';
import { generarId } from '../utils/generarId';

export const loginService = async (
  usuario: Usuario,
): Promise<UsuarioMySQL | undefined> => {
  return await getUser(usuario);
};

export const signUpService = async (
  persona: Persona,
  empleado: Empleado,
  usuario: Usuario,
) => {
  const resulSetPersona = await setPersonaService(persona);

  if (resulSetPersona && resulSetPersona.affectedRows > 0) {
    empleado.idPersona = resulSetPersona.idPersona;

    const resultSetEmpleado = await setEmpleadoService(empleado);

    if (resultSetEmpleado && resultSetEmpleado.affectedRows > 0) {
      usuario.idUsuario = generarId();
      usuario.idEmpleado = empleado.idEmpleado; // probando esto
      usuario.password = usuario.password = await encryptPassword(
        usuario.password!,
      );

      console.log({ idUsuario: usuario.idUsuario });

      return await setUser(usuario);
    }
  }
};
