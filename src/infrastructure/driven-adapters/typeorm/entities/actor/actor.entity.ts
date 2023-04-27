
import {
    Entity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    UpdateDateColumn,
    OneToMany,
    PrimaryGeneratedColumn,
    ManyToMany,
    ManyToOne,
} from 'typeorm';
import {ActorEnum} from "../../../../../entities/models/actor/actor.model.entity";
       
@Entity()    
export class ActorEntity{

    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column({type: 'varchar', nullable: false})
    name: string;
    
    @Column({type: 'boolean', nullable: false})
    isActive: boolean;
    
    @Column({type: 'varchar', nullable: true})
    status!: ActorEnum;
    
    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt!: Date;
    
    constructor(name: string, isActive: boolean) {
        this.name = name;
        this.isActive = isActive;
    }
}