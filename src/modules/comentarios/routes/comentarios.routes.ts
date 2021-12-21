import { Router } from "express";
import { celebrate, Joi, Segments, errors } from 'celebrate';
import ComentariosController from "../controllers/ComentariosController";

let comentariosRoutes = Router();
let comentariosController = new ComentariosController();

comentariosRoutes.get("/", comentariosController.index);

comentariosRoutes.post(
    "/",
    celebrate({
        [Segments.BODY]: {
            nome: Joi.string().required(),
            comentario: Joi.string().required(),
        },
    }),
     comentariosController.create
     );

export default comentariosRoutes;