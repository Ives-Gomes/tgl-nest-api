import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Bet } from 'src/bet/bet.entity';

@ObjectType()
@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: string;

  @Column({ length: 36, nullable: false })
  secure_id: string;

  @Column({ length: 50, nullable: false })
  name: string;

  @Column({ length: 250, nullable: false })
  description: string;

  @Column({ unsigned: true, nullable: false })
  range: number;

  @Column({ unsigned: true, nullable: false })
  price: number;

  @Column({ unsigned: true, nullable: false })
  min_and_max_value: number;

  @Column('timestamp', { nullable: false })
  created_at: Date;

  @Column('timestamp', { nullable: false })
  updated_at: Date;

  @OneToMany(() => Bet, (bet) => bet.user, {
    nullable: true,
    cascade: true,
  })
  bet: Bet[];
}
