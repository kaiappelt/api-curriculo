import { Router } from "express";
import { celebrate, Joi, Segments, errors } from 'celebrate';
import ContatoController from "../controllers/ContatoController";

let contatoRoutes = Router();
let contatoController = new ContatoController();


contatoRoutes.post(
    "/",
    celebrate({
        [Segments.BODY]: {
            nome: Joi.string().required(),
            telefone: Joi.string().required(),
            email: Joi.string().email().required(),
        },
    }),
     contatoController.create
     );

export default contatoRoutes;