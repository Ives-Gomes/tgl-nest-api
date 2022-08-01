import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User_RoleService } from './user_role.service';
import { User_RoleResolver } from './user_role.resolver';

import { User_Role } from './user_role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User_Role])],
  providers: [User_RoleService, User_RoleResolver],
})
export class User_RoleModule {}
