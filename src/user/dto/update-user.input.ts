import { InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @IsString()
  @IsOptional()
  secure_id?: string;

  @IsString()
  @IsNotEmpty({ message: 'Name field is required' })
  @IsOptional()
  name?: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Email field is required' })
  @IsOptional()
  email?: string;

  @IsString()
  @IsNotEmpty({ message: 'Cpf field is required' })
  @IsOptional()
  cpf: string;

  @IsString()
  @IsNotEmpty({ message: 'Password field is required' })
  @IsOptional()
  password: string;
}
