import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateUser_RoleInput {
  @IsString()
  @IsOptional()
  secure_id: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: 'Name field is required' })
  name: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: 'Description field is required' })
  description: string;
}
