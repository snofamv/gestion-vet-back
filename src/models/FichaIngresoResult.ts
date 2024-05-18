import { ResultSetHeader } from 'mysql2';

export interface FichaIngresoResult extends ResultSetHeader {
  idFichaIngreso: string;
}
