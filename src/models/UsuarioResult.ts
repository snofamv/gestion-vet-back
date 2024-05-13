import { ResultSetHeader } from 'mysql2';

export interface UsuarioResult extends ResultSetHeader {
  nombreUsuario: string;
}
