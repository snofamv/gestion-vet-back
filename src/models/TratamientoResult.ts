import { ResultSetHeader } from 'mysql2';

export interface tratamientoResult extends ResultSetHeader {
  idTratamiento: string;
}
