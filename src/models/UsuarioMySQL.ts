import { RowDataPacket } from 'mysql2';

export interface Usuario extends RowDataPacket {
  idUsuario?: string;
  password?: string;
  idEmpleado?: string;
  nombreUsuario: string;
}
