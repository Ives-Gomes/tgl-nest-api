import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { User } from 'src/user/user.entity';
import { Game } from 'src/game/game.entity';

@ObjectType()
@Entity()
export class Bet {
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

  @ManyToOne(() => Game, { nullable: true })
  game: Game;
}
