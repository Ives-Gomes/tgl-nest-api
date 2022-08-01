import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { CreateBetInput } from './dto/create-bet.input';
import { UpdateBetInput } from './dto/update-bet.input';

import { Bet } from './bet.entity';

@Injectable()
export class BetService {
  constructor(
    @InjectRepository(Bet)
    private betRepository: Repository<Bet>,
  ) {}

  async findAllBetes(): Promise<Bet[]> {
    const bets = await this.betRepository.find();

    return bets;
  }

  async findBetById(id: string): Promise<Bet> {
    const bet = await this.betRepository.findOneBy({ id });

    if (!bet) {
      throw new NotFoundException('Bet not found');
    }

    return bet;
  }

  async createBet(data: CreateBetInput): Promise<Bet> {
    data.secure_id = uuidv4();

    const bet = this.betRepository.create(data);
    const betSaved = await this.betRepository.save(bet);

    if (!betSaved) {
      throw new InternalServerErrorException('Error in create bet');
    }

    return betSaved;
  }

  async updateBet(id: string, data: UpdateBetInput): Promise<Bet> {
    const bet = await this.findBetById(id);

    await this.betRepository.update(bet, { ...data });

    const betUpdated = this.betRepository.create({
      ...bet,
      ...data,
    });

    return betUpdated;
  }

  async deleteBet(id: string): Promise<boolean> {
    const bet = await this.findBetById(id);
    const deleted = await this.betRepository.delete(bet);

    if (deleted) {
      return true;
    }

    return false;
  }
}
