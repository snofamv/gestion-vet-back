import { ResultSetHeader } from 'mysql2';

export interface FichaClinicaResult extends ResultSetHeader {
  idFichaClinica: string;
}
