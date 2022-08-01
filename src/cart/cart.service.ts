import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { CreateCartInput } from './dto/create-cart.input';
import { UpdateCartInput } from './dto/update-cart.input';

import { Cart } from './cart.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,
  ) {}

  async findAllCartes(): Promise<Cart[]> {
    const carts = await this.cartRepository.find();

    return carts;
  }

  async findCartById(id: string): Promise<Cart> {
    const cart = await this.cartRepository.findOneBy({ id });

    if (!cart) {
      throw new NotFoundException('Cart not found');
    }

    return cart;
  }

  async createCart(data: CreateCartInput): Promise<Cart> {
    data.secure_id = uuidv4();

    const cart = this.cartRepository.create(data);
    const cartSaved = await this.cartRepository.save(cart);

    if (!cartSaved) {
      throw new InternalServerErrorException('Error in create cart');
    }

    return cartSaved;
  }

  async updateCart(id: string, data: UpdateCartInput): Promise<Cart> {
    const cart = await this.findCartById(id);

    await this.cartRepository.update(cart, { ...data });

    const cartUpdated = this.cartRepository.create({
      ...cart,
      ...data,
    });

    return cartUpdated;
  }

  async deleteCart(id: string): Promise<boolean> {
    const cart = await this.findCartById(id);
    const deleted = await this.cartRepository.delete(cart);

    if (deleted) {
      return true;
    }

    return false;
  }
}
