import { RowDataPacket } from 'mysql2';

export interface Persona extends RowDataPacket {
  idPersona: string;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  fechaNacimiento: string;
  rut: number;
  dv: string;
  sexo: string;
  telefono: number;
  direccion: string;
  email: string;
}
