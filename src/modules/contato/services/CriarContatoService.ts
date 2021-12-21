import { getCustomRepository } from "typeorm";
import Contato from "../entities/Contato";
import ContatoRepository from "../repositories/ContatoRepository";

interface IRequest {
    nome: string;
    telefone: string;
    email: string;
}

class CriarContatoService {
    public async execute({ 
        nome,
        telefone,
        email,
     }:IRequest): Promise<Contato> {
        const contatoRepository = getCustomRepository(ContatoRepository);

        const novoContato = contatoRepository.create({
            nome,
            telefone,
            email,
        });

        await contatoRepository.save(novoContato);

        return novoContato;
    }
}

export default CriarContatoService;