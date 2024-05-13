import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import {
  authRouter,
  personaRouter,
  empleadoRouter,
  usuarioRouter,
  dueñoMascotaRouter,
} from '../routes';

import { pool } from './db';

config({
  path: './.env',
});

export class Server {
  port: string | number;
  app: express.Application;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || 5000;

    this.middlewares();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(authRouter);
    this.app.use(personaRouter);
    this.app.use(empleadoRouter);
    this.app.use(usuarioRouter);
    this.app.use(dueñoMascotaRouter);

    pool.query('SELECT * FROM cargo;', (err, field) => {
      if (err) {
        return 2;
      }
      console.log(field);
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server on port: ' + this.port);
    });
  }
}
