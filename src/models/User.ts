import {Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne} from 'typeorm';
import Like from './Like';
import Piu from './Piu';

@Entity('users')
export default class User{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    message: string;

    @Column()
    image: string;

    @Column('timestamp')
    date: Date;

    @OneToMany(type => Piu, pius => pius.user)
    pius: Piu[];

    @OneToOne(type => Like, like => like.user)
    like: Like;
}
