import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Address } from 'src/address/address.entity';

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

  @OneToMany(() => Address, (address) => address.user)
  address: Address[];
}
