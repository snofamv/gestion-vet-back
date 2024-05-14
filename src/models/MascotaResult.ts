import { ResultSetHeader } from 'mysql2';

export interface MascotaResult extends ResultSetHeader {
  idMascota: string;
}
