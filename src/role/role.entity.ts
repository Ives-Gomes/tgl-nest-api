import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { User_Role } from 'src/user_role/user_role.entity';

@ObjectType()
@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: string;

  @Column({ length: 36, nullable: false })
  secure_id: string;

  @Column({ length: 50, nullable: false })
  name: string;

  @Column({ length: 250, nullable: false })
  description: string;

  @Column('timestamp', { nullable: false })
  created_at: Date;

  @Column('timestamp', { nullable: false })
  updated_at: Date;

  @OneToMany(() => User_Role, (user_role) => user_role.user, {
    nullable: true,
    cascade: true,
  })
  user_role: User_Role[];
}
