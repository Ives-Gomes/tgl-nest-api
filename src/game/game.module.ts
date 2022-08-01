import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GameService } from './game.service';
import { GameResolver } from './game.resolver';

import { Game } from './game.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Game])],
  providers: [GameService, GameResolver],
})
export class GameModule {}
