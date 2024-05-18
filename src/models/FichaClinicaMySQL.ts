import { RowDataPacket } from 'mysql2';

export interface FichaClinica extends RowDataPacket {
  idFichaClinica?: string;
  fechaIngreso: string;
  enfermedades: string;
  peso: number;
  observaciones: string;
  antecedentes: string;
  idMascota: string;
  idCitaMedica: string;
}
