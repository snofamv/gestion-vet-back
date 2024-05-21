import { RowDataPacket } from 'mysql2';

export interface Insumotratamiento extends RowDataPacket {
  idInsumoTratamiento: number;
  idTratamiento: string;
  idInsumo: number;
  stockUsado: number;
}
