import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';

import { CreateUser_RoleInput } from './dto/create-user_role.input';
import { UpdateUser_RoleInput } from './dto/update-user_role.input';

import { User_Role } from './user_role.entity';

import { User_RoleService } from './user_role.service';

@Resolver('User_Role')
export class User_RoleResolver {
  constructor(private user_roleService: User_RoleService) {}

  @Query(() => [User_Role])
  async user_roles(): Promise<User_Role[]> {
    const user_roles = await this.user_roleService.findAllUser_Rolees();

    return user_roles;
  }

  @Query(() => User_Role)
  async user_role(@Args('id') id: string): Promise<User_Role> {
    const user_role = await this.user_roleService.findUser_RoleById(id);

    return user_role;
  }

  @Mutation(() => User_Role)
  async createUser_Role(
    @Args('data') data: CreateUser_RoleInput,
  ): Promise<User_Role> {
    const user_role = await this.user_roleService.createUser_Role(data);

    return user_role;
  }

  @Mutation(() => User_Role)
  async updateUser_Role(
    @Args('id') id: string,
    @Args('data') data: UpdateUser_RoleInput,
  ): Promise<User_Role> {
    const user_role = this.user_roleService.updateUser_Role(id, data);

    return user_role;
  }

  @Mutation(() => Boolean)
  async deleteUser_Role(@Args('id') id: string): Promise<boolean> {
    const deleted = await this.user_roleService.deleteUser_Role(id);

    return deleted;
  }
}
