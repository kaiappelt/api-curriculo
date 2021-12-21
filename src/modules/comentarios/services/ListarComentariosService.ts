import { getCustomRepository } from "typeorm";
import Comentario from "../entities/Comentario";
import ComentarioRepository from "../repositories/ComentarioRepository";

class ListarComentariosService {
    public async execute(): Promise<Comentario[]> {
        const comentarioRepository = getCustomRepository(ComentarioRepository);

        const comentarios = await comentarioRepository.find();

        return comentarios;
    }
}
export default ListarComentariosService;