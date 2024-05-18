import { ResultSetHeader } from 'mysql2';

export interface CitaMedicaResult extends ResultSetHeader {
  idCitaMedica: string;
}
