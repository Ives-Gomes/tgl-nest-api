import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';

import { CreateCartInput } from './dto/create-cart.input';
import { UpdateCartInput } from './dto/update-cart.input';

import { Cart } from './cart.entity';

import { CartService } from './cart.service';

@Resolver('Cart')
export class CartResolver {
  constructor(private cartService: CartService) {}

  @Query(() => [Cart])
  async carts(): Promise<Cart[]> {
    const carts = await this.cartService.findAllCartes();

    return carts;
  }

  @Query(() => Cart)
  async cart(@Args('id') id: string): Promise<Cart> {
    const cart = await this.cartService.findCartById(id);

    return cart;
  }

  @Mutation(() => Cart)
  async createCart(@Args('data') data: CreateCartInput): Promise<Cart> {
    const cart = await this.cartService.createCart(data);

    return cart;
  }

  @Mutation(() => Cart)
  async updateCart(
    @Args('id') id: string,
    @Args('data') data: UpdateCartInput,
  ): Promise<Cart> {
    const cart = this.cartService.updateCart(id, data);

    return cart;
  }

  @Mutation(() => Boolean)
  async deleteCart(@Args('id') id: string): Promise<boolean> {
    const deleted = await this.cartService.deleteCart(id);

    return deleted;
  }
}
