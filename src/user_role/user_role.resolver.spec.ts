import { Test, TestingModule } from '@nestjs/testing';
import { User_RoleResolver } from './user_role.resolver';

describe('User_RoleResolver', () => {
  let resolver: User_RoleResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [User_RoleResolver],
    }).compile();

    resolver = module.get<User_RoleResolver>(User_RoleResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
