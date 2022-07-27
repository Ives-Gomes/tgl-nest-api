import { InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'Name field is required' })
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Email field is required' })
  email: string;
}
