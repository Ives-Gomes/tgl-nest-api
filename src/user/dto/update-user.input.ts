import { InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'Name field is required' })
  @IsOptional()
  name?: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Email field is required' })
  @IsOptional()
  email?: string;
}
