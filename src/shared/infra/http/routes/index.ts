import { Router } from 'express';

import appointmenstRouter from '@modules/appointments/infra/http/routes/appointments.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/appointments', appointmenstRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;