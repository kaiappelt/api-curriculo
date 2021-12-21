import{
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";

@Entity ("comentarios")
class Comentario{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    nome: string;

    @Column()
    comentario: string;

    @CreateDateColumn()
    criado_em: Date;

    @UpdateDateColumn()
    editado_em: Date;
}

export default Comentario;