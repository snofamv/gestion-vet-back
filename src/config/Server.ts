import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import {
  authRouter,
  personaRouter,
  empleadoRouter,
  usuarioRouter,
  dueñoMascotaRouter,
  mascotaRouter,
  fichaClinicaRouter,
  fichaIngresoRouter,
  tratamientoMascotaRouter,
  recetaMascotaRouter,
  citaMedicaRouter,
} from '../routes';

import { errorHandler } from '../middlewares/HandleError';

// import { pool } from './db';

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
    this.app.use(mascotaRouter);
    this.app.use(citaMedicaRouter);
    this.app.use(fichaClinicaRouter);
    this.app.use(fichaIngresoRouter);
    this.app.use(tratamientoMascotaRouter);
    this.app.use(recetaMascotaRouter);

    this.app.use(errorHandler);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server on port: ' + this.port);
    });
  }
}
