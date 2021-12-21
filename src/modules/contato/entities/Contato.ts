import{
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";

@Entity ("contato")
class Contato{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    nome: string;

    @Column()
    telefone: string;

    @Column()
    email: string;

    @CreateDateColumn()
    criado_em: Date;

    @UpdateDateColumn()
    editado_em: Date;
}

export default Contato;