import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { CreateAddressInput } from './dto/create-address.input';
import { UpdateAddressInput } from './dto/update-address.input';

import { Address } from './address.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
  ) {}

  async findAllAddresses(): Promise<Address[]> {
    const addresses = await this.addressRepository.find();

    return addresses;
  }

  async findAddressById(id: string): Promise<Address> {
    const address = await this.addressRepository.findOneBy({ id });

    if (!address) {
      throw new NotFoundException('Address not found');
    }

    return address;
  }

  async createAddress(data: CreateAddressInput): Promise<Address> {
    data.secure_id = uuidv4();

    const address = this.addressRepository.create(data);
    const addressSaved = await this.addressRepository.save(address);

    if (!addressSaved) {
      throw new InternalServerErrorException('Error in create address');
    }

    return addressSaved;
  }

  async updateAddress(id: string, data: UpdateAddressInput): Promise<Address> {
    const address = await this.findAddressById(id);

    await this.addressRepository.update(address, { ...data });

    const addressUpdated = this.addressRepository.create({
      ...address,
      ...data,
    });

    return addressUpdated;
  }

  async deleteAddress(id: string): Promise<boolean> {
    const address = await this.findAddressById(id);
    const deleted = await this.addressRepository.delete(address);

    if (deleted) {
      return true;
    }

    return false;
  }
}
