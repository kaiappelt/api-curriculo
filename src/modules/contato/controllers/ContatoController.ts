import { Request, Response } from "express";
import CriarContatoService from "../services/CriarContatoService";

export default class ContatoController {

    public async create(
        request: Request, 
        response: Response
): Promise<Response> {
    const { nome, telefone, email } = request.body;

    const criarContatoService = new CriarContatoService();

    const novoContato = await criarContatoService.execute({
        nome,
        telefone,
        email,
    });

    return response.json(novoContato);
}
}