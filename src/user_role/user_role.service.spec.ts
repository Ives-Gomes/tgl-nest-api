import { Test, TestingModule } from '@nestjs/testing';

import { User_RoleService } from './user_role.service';

describe('User_RoleService', () => {
  let service: User_RoleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [User_RoleService],
    }).compile();

    service = module.get<User_RoleService>(User_RoleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
