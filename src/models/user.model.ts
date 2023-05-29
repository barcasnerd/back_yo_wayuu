import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany, ManyToOne } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ nullable: true })
    email!: string;

    @Column({ nullable: true })
    password!: string;

    @Column({ nullable: true })
    name!: string;

    @Column({ nullable: true })
    lastName!: string;

    @Column({ nullable: true, default: 0 })
    progresoCurso1?: number;

    @Column('float', { nullable: true, default: 0.0 })
    notaCurso1?: number;

    @Column({ nullable: true, default: 0 })
    progresoCurso2?: number;

    @Column('float', { nullable: true, default: 0.0 })
    notaCurso2?: number;

    @Column({ nullable: true, default: 0 })
    progresoCurso3?: number;

    @Column('float', { nullable: true, default: 0.0 })
    notaCurso3?: number;

    @Column({ nullable: true, default: 0 })
    progresoCurso4?: number;

    @Column('float', { nullable: true, default: 0.0 })
    notaCurso4?: number;

    @Column({ nullable: true, default: 0 })
    progresoCurso5?: number;

    @Column('float', { nullable: true, default: 0.0 })
    notaCurso5?: number;

    @Column({ nullable: true, default: 0 })
    progresoCurso6?: number;

    @Column('float', { nullable: true, default: 0.0 })
    notaCurso6?: number;


    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt!: Date;

    constructor(email: string, password: string, name: string, lastName: string) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.lastName = lastName;
    }
}
