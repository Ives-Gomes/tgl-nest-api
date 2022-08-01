import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { CreateRoleInput } from './dto/create-role.input';
import { UpdateRoleInput } from './dto/update-role.input';

import { Role } from './role.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) {}

  async findAllRolees(): Promise<Role[]> {
    const roles = await this.roleRepository.find();

    return roles;
  }

  async findRoleById(id: string): Promise<Role> {
    const role = await this.roleRepository.findOneBy({ id });

    if (!role) {
      throw new NotFoundException('Role not found');
    }

    return role;
  }

  async createRole(data: CreateRoleInput): Promise<Role> {
    data.secure_id = uuidv4();

    const role = this.roleRepository.create(data);
    const roleSaved = await this.roleRepository.save(role);

    if (!roleSaved) {
      throw new InternalServerErrorException('Error in create role');
    }

    return roleSaved;
  }

  async updateRole(id: string, data: UpdateRoleInput): Promise<Role> {
    const role = await this.findRoleById(id);

    await this.roleRepository.update(role, { ...data });

    const roleUpdated = this.roleRepository.create({
      ...role,
      ...data,
    });

    return roleUpdated;
  }

  async deleteRole(id: string): Promise<boolean> {
    const role = await this.findRoleById(id);
    const deleted = await this.roleRepository.delete(role);

    if (deleted) {
      return true;
    }

    return false;
  }
}
