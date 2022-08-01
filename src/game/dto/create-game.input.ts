import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateGameInput {
  @IsString()
  @IsOptional()
  secure_id: string;

  @IsString()
  @IsNotEmpty({ message: 'Name field is required' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Description field is required' })
  description: string;

  @IsNumber()
  @IsNotEmpty({ message: 'Range field is required' })
  range: number;

  @IsNumber()
  @IsNotEmpty({ message: 'Price field is required' })
  price: number;

  @IsNumber()
  @IsNotEmpty({ message: 'Min and max value field is required' })
  min_and_max_value: number;
}
