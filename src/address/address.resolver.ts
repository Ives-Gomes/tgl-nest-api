import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';

import { CreateAddressInput } from './dto/create-address.input';
import { UpdateAddressInput } from './dto/update-address.input';

import { Address } from './address.entity';

import { AddressService } from './address.service';

@Resolver('Address')
export class AddressResolver {
  constructor(private addressService: AddressService) {}

  @Query(() => [Address])
  async addresses(): Promise<Address[]> {
    const addresses = await this.addressService.findAllAddresses();

    return addresses;
  }

  @Query(() => Address)
  async address(@Args('id') id: string): Promise<Address> {
    const address = await this.addressService.findAddressById(id);

    return address;
  }

  @Mutation(() => Address)
  async createAddress(
    @Args('data') data: CreateAddressInput,
  ): Promise<Address> {
    const address = await this.addressService.createAddress(data);

    return address;
  }

  @Mutation(() => Address)
  async updateAddress(
    @Args('id') id: string,
    @Args('data') data: UpdateAddressInput,
  ): Promise<Address> {
    const address = this.addressService.updateAddress(id, data);

    return address;
  }

  @Mutation(() => Boolean)
  async deleteAddress(@Args('id') id: string): Promise<boolean> {
    const deleted = await this.addressService.deleteAddress(id);

    return deleted;
  }
}
