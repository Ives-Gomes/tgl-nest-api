import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Address } from 'src/address/address.entity';
import { User_Role } from 'src/user_role/user_role.entity';
import { Bet } from 'src/bet/bet.entity';

@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: string;

  @Column({ length: 36, nullable: false })
  secure_id: string;

  @Column({ length: 50, nullable: false })
  name: string;

  @Column({ length: 14, nullable: false, unique: true })
  cpf: string;

  @Column({ length: 50, nullable: false, unique: true })
  email: string;

  @Column({ length: 250, nullable: false })
  password: string;

  @Column('timestamp', { nullable: false })
  created_at: Date;

  @Column('timestamp', { nullable: false })
  updated_at: Date;

  @OneToMany(() => Address, (address) => address.user, {
    nullable: true,
    cascade: true,
  })
  address: Address[];

  @OneToMany(() => User_Role, (user_role) => user_role.user, {
    nullable: true,
    cascade: true,
  })
  user_role: User_Role[];

  @OneToMany(() => Bet, (bet) => bet.user, {
    nullable: true,
    cascade: true,
  })
  bet: Bet[];
}
