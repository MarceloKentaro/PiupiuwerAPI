import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable} from 'typeorm';
import User from './User';

@Entity('pius')
export default class Piu{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    message: string;

    @Column()
    userId: string;

    @Column('timestamp')
    date: Date;

    @ManyToOne(type => User, users => users.pius)
    user: User;

}
