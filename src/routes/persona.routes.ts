import { Router } from 'express';
import { PersonaController } from '../controllers/persona.controller';
import { validPersona } from '../middlewares/validPersona';
import { existRut } from '../middlewares/existRut';
import { existEmail } from '../middlewares/existEmail';
import { validRut } from '../middlewares/validRut';

export const personaRouter = Router();

const personaController = new PersonaController();

personaRouter.post(
  '/persona',
  validPersona,
  existRut,
  existEmail,
  personaController.setPersona,
);

personaRouter.get(
  '/persona/rut/:rut',
  validRut,
  personaController.getPersonaByRut,
);

personaRouter.get(
  '/persona/nombre-usuario/:nombreUsuario',
  personaController.getPersonaByNombreUsuario,
);

personaRouter.patch('/persona', personaController.updatePersona);

personaRouter.get('/personas/', personaController.getPersonas);
