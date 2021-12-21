import { EntityRepository, Repository } from "typeorm";
import Contato from "../entities/Contato";

@EntityRepository(Contato)
export default class ContatoRepository extends Repository<Contato> {}