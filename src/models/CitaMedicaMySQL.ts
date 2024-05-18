import { RowDataPacket } from 'mysql2';

export interface CitaMedica extends RowDataPacket {
  idCitaMedica: string;
  fechaCitaMedica: string;
  horaCitaMedica: string;
}
