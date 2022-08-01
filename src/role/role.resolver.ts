import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';

import { CreateRoleInput } from './dto/create-role.input';
import { UpdateRoleInput } from './dto/update-role.input';

import { Role } from './role.entity';

import { RoleService } from './role.service';

@Resolver('Role')
export class RoleResolver {
  constructor(private roleService: RoleService) {}

  @Query(() => [Role])
  async roles(): Promise<Role[]> {
    const roles = await this.roleService.findAllRolees();

    return roles;
  }

  @Query(() => Role)
  async role(@Args('id') id: string): Promise<Role> {
    const role = await this.roleService.findRoleById(id);

    return role;
  }

  @Mutation(() => Role)
  async createRole(@Args('data') data: CreateRoleInput): Promise<Role> {
    const role = await this.roleService.createRole(data);

    return role;
  }

  @Mutation(() => Role)
  async updateRole(
    @Args('id') id: string,
    @Args('data') data: UpdateRoleInput,
  ): Promise<Role> {
    const role = this.roleService.updateRole(id, data);

    return role;
  }

  @Mutation(() => Boolean)
  async deleteRole(@Args('id') id: string): Promise<boolean> {
    const deleted = await this.roleService.deleteRole(id);

    return deleted;
  }
}
