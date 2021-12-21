import { Request, Response } from "express";
import CriarComentarioService from "../services/CriarComentarioService";
import ListarComentariosService from "../services/ListarComentariosService";

export default class ComentariosController {

    public async index(
            request: Request, 
            response: Response
        ): Promise<Response> {
        const listarComentariosService = new ListarComentariosService();

        const comentarios = await listarComentariosService.execute();
        
        return response.json(comentarios);
    }

    public async create(
        request: Request, 
        response: Response
): Promise<Response> {
    const { nome, comentario } = request.body;

    const criarComentarioService = new CriarComentarioService();

    const novoComentario = await criarComentarioService.execute({
        nome,
        comentario,
    });

    return response.json(novoComentario);
}
}