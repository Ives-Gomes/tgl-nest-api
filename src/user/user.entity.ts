import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: string;

  @Column('uuid', { nullable: false })
  secure_id: string;

  @Column({ length: 50, nullable: false })
  name: string;

  @Column({ length: 14, nullable: false, unique: true })
  cpf: string;

  @Column({ length: 50, nullable: false, unique: true })
  email: string;

  @Column({ nullable: false, unique: true })
  password: string;

  @Column('timestamp', { nullable: false })
  created_at: Date;

  @Column('timestamp', { nullable: false })
  updated_at: Date;
}
