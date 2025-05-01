import { Router } from "express";

const routes = Router();

routes.get('/', new PsychologistController().renderLoginPagePsychologist);

export default routes;