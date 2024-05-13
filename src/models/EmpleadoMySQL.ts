import { RowDataPacket } from 'mysql2';

export interface Empleado extends RowDataPacket {
  idEmpleado: string;
  codMedico: string;
  fechaIngreso: string;
  fechaSalida: string;
  idPersona: string;
  idCargo: number;
  idEstadoEmpleado: number;
  idEspecialidad: number;
}
