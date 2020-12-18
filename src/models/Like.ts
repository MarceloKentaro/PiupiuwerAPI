import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn} from 'typeorm';
import Piu from './Piu';
import User from './User';

@Entity('likes')
export default class Like{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    piuId: string;

    @Column()
    userId: string;

    @OneToOne(type => User, users => users.like)
    @JoinColumn({name: 'userId'})
    user: User;

    @ManyToOne(type => User, users => users.like, { eager: true })
    piu: Piu[];
}