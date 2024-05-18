import { RowDataPacket } from 'mysql2';

export interface RecetaMascota extends RowDataPacket {
  idReceta: string;
  descripcion: string;
  medico: string;
  vigencia: number;
  fechaEmision: string;
  retieneRecete: number;
}
