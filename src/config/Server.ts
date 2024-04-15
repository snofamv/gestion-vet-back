import Express from 'express';
import { config } from 'dotenv';

config({
  path: './.env',
});

export class Server {
  port: string | number;
  app: Express.Application;

  constructor() {
    this.app = Express();
    this.port = process.env.PORT || 5000;
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server on port: ' + this.port);
    });
  }
}
