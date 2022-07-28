import { InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString()
  @IsOptional()
  secure_id: string;

  @IsString()
  @IsNotEmpty({ message: 'Name field is required' })
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Email field is required' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Cpf field is required' })
  cpf: string;

  @IsString()
  @IsNotEmpty({ message: 'Password field is required' })
  password: string;
}
