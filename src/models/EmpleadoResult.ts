import { ResultSetHeader } from 'mysql2';

export interface EmpleadoResult extends ResultSetHeader {
  idEmpleado: string;
}
