import { RowDataPacket } from 'mysql2';

export interface Mascota extends RowDataPacket {
  idMascota: string;
  nombreMascota: string;
  especie: string;
  raza: string;
  genero: string;
  edadMascota: number;
}
