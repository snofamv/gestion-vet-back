import { ResultSetHeader } from 'mysql2';

export interface RecetaMascotaResult extends ResultSetHeader {
  idReceta: string;
}
