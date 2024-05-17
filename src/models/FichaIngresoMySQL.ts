import { RowDataPacket } from 'mysql2';

export interface FichaIngreso extends RowDataPacket {
  idFichaIngreso?: string;
  sintomas: string;
  antecedentes: string;
  fechaAlta: string;
  fechaIngreso: string;
  diagnostico: string;
  observaciones: string;
  temperatura: number;
  idEstados: number;
}
