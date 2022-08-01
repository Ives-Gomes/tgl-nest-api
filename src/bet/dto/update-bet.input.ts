import { InputType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateBetInput {
  @IsString()
  @IsOptional()
  secure_id: string;
}
