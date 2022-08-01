import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateUser_RoleInput {
  @IsString()
  @IsOptional()
  secure_id: string;

  @IsString()
  @IsNotEmpty({ message: 'Name field is required' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Description field is required' })
  description: string;
}
