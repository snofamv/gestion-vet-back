import { RowDataPacket } from 'mysql2';

export interface Insumo extends RowDataPacket {
  idInsumo: number;
  insumo: string;
  stock: number;
  fechaCaducidad: string;
}
