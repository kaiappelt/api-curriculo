import comentariosRoutes from "../modules/comentarios/routes/comentarios.routes";
import contatoRoutes from "../modules/contato/routes/contato.routes";
import { Router } from "express";

const routes = Router();

routes.use("/comentarios", comentariosRoutes);
routes.use("/contato", contatoRoutes);

export default routes;