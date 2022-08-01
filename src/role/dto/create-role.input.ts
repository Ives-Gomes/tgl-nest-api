import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateRoleInput {
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
