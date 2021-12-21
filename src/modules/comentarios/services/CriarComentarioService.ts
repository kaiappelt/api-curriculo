import { getCustomRepository } from "typeorm";
import Comentario from "../entities/Comentario";
import ComentarioRepository from "../repositories/ComentarioRepository";

interface IRequest {
    nome: string;
    comentario: string;
}

class CriarComentarioService {
    public async execute({ 
        nome,
        comentario
     }:IRequest): Promise<Comentario> {
        const comentarioRepository = getCustomRepository(ComentarioRepository);

        const novoComentario = comentarioRepository.create({
            nome,
            comentario,
        });

        await comentarioRepository.save(novoComentario);

        return novoComentario;
    }
}

export default CriarComentarioService;