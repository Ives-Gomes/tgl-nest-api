import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { User } from 'src/user/user.entity';
import { Role } from 'src/role/role.entity';

@ObjectType()
@Entity()
export class User_Role {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: string;

  @Column({ length: 36, nullable: false })
  secure_id: string;

  @Column('timestamp', { nullable: false })
  created_at: Date;

  @Column('timestamp', { nullable: false })
  updated_at: Date;

  @ManyToOne(() => User, { nullable: true })
  user: User;

  @ManyToOne(() => Role, { nullable: true })
  role: Role;
}
