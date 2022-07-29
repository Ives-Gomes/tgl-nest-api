import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateAddressInput {
  @IsString()
  @IsOptional()
  secure_id: string;

  @IsString()
  @IsNotEmpty({ message: 'User id field is required' })
  user_id: string;

  @IsString()
  @IsNotEmpty({ message: 'Zip code field is required' })
  zip_code: string;

  @IsString()
  @IsNotEmpty({ message: 'State field is required' })
  state: string;

  @IsString()
  @IsNotEmpty({ message: 'City field is required' })
  city: string;

  @IsString()
  @IsNotEmpty({ message: 'Street field is required' })
  street: string;

  @IsString()
  @IsNotEmpty({ message: 'District field is required' })
  district: string;

  @IsString()
  @IsNotEmpty({ message: 'Number field is required' })
  number: string;

  @IsString()
  @IsNotEmpty({ message: 'Complement field is required' })
  complement: string;
}
