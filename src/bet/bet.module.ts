import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BetService } from './bet.service';
import { BetResolver } from './bet.resolver';

import { Bet } from './bet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bet])],
  providers: [BetService, BetResolver],
})
export class BetModule {}
