import { RowDataPacket } from 'mysql2';

export interface Especialidad extends RowDataPacket {
  idEspecialidad: number;
  tipo: string;
}
