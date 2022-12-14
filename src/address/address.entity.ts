import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { User } from 'src/user/user.entity';

@ObjectType()
@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: string;

  @Column({ length: 36, nullable: false })
  secure_id: string;

  @Column({ length: 50, nullable: false })
  zip_code: string;

  @Column({ length: 2, nullable: false })
  state: string;

  @Column({ length: 50, nullable: false })
  city: string;

  @Column({ length: 250, nullable: false })
  street: string;

  @Column({ length: 50, nullable: false })
  district: string;

  @Column({ length: 50, nullable: false })
  number: string;

  @Column({ length: 250, nullable: true })
  complement: string;

  @Column('timestamp', { nullable: false })
  created_at: Date;

  @Column('timestamp', { nullable: false })
  updated_at: Date;

  @ManyToOne(() => User, { nullable: true })
  user: User;
}
