import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { CreateUser_RoleInput } from './dto/create-user_role.input';
import { UpdateUser_RoleInput } from './dto/update-user_role.input';

import { User_Role } from './user_role.entity';

@Injectable()
export class User_RoleService {
  constructor(
    @InjectRepository(User_Role)
    private user_roleRepository: Repository<User_Role>,
  ) {}

  async findAllUser_Rolees(): Promise<User_Role[]> {
    const user_roles = await this.user_roleRepository.find();

    return user_roles;
  }

  async findUser_RoleById(id: string): Promise<User_Role> {
    const user_role = await this.user_roleRepository.findOneBy({ id });

    if (!user_role) {
      throw new NotFoundException('User_Role not found');
    }

    return user_role;
  }

  async createUser_Role(data: CreateUser_RoleInput): Promise<User_Role> {
    data.secure_id = uuidv4();

    const user_role = this.user_roleRepository.create(data);
    const user_roleSaved = await this.user_roleRepository.save(user_role);

    if (!user_roleSaved) {
      throw new InternalServerErrorException('Error in create user_role');
    }

    return user_roleSaved;
  }

  async updateUser_Role(
    id: string,
    data: UpdateUser_RoleInput,
  ): Promise<User_Role> {
    const user_role = await this.findUser_RoleById(id);

    await this.user_roleRepository.update(user_role, { ...data });

    const user_roleUpdated = this.user_roleRepository.create({
      ...user_role,
      ...data,
    });

    return user_roleUpdated;
  }

  async deleteUser_Role(id: string): Promise<boolean> {
    const user_role = await this.findUser_RoleById(id);
    const deleted = await this.user_roleRepository.delete(user_role);

    if (deleted) {
      return true;
    }

    return false;
  }
}
