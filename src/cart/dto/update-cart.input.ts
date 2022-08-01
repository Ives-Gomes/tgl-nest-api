import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateCartInput {
  @IsString()
  @IsOptional()
  secure_id: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: 'Min cart value field is required' })
  min_cart_value: number;
}
