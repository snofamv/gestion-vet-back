import { RowDataPacket } from 'mysql2';

export interface DueñoMascota extends RowDataPacket {
  idDueño: string;
  idPersona: string;
}
