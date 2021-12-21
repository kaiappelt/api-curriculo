import { EntityRepository, Repository } from "typeorm";
import Comentario from "../entities/Comentario";

@EntityRepository(Comentario)
export default class ComentarioRepository extends Repository<Comentario> {}