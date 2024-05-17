import { RowDataPacket } from 'mysql2';

export interface TratamientoMascota extends RowDataPacket {
  idTratamiento: string;
  descripcion: string;
  fecha: string;
  tipo: string;
  costo: number;
}
