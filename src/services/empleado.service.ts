import { Empleado } from '../models/Empleado';
import {
  getEmpleadoByIdPersona,
  getEmpleadoByNombreUsuario,
  getEmpleadoByRut,
  getEmpleados,
  setEmpleado,
  updateEmpleado,
} from '../repositories/empleado.repository';
import { generarId } from '../utils/generarId';

export const setEmpleadoService = async (empleado: Empleado) => {
  empleado.idEmpleado = generarId();

  if (!empleado.idCargo) {
    empleado.idCargo = 1;
  }
  if (!empleado.idEstadoEmpleado) {
    empleado.idEstadoEmpleado = 5;
  }
  if (!empleado.idEspecialidad) {
    empleado.idEspecialidad = 8;
  }

  return await setEmpleado(empleado);
};

export const getEmpleadoByRutService = async (rut: number) => {
  return await getEmpleadoByRut(rut);
};

export const getEmpleadoByIdPersonaService = async (idPersona: string) => {
  return await getEmpleadoByIdPersona(idPersona);
};

export const getEmpleadoByNombreUsuarioService = async (
  nombreUsuario: string,
) => {
  return await getEmpleadoByNombreUsuario(nombreUsuario);
};

export const getEmpleadosService = async () => {
  return await getEmpleados();
};

export const updateEmpleadoService = async (empleado: Empleado) => {
  return await updateEmpleado(empleado);
};
