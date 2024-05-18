import { ResultSetHeader } from 'mysql2';

export interface DueñoMascotaResult extends ResultSetHeader {
  idDueño: string;
}
