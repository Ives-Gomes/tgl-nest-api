import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateAddressInput {
  @IsString()
  @IsOptional()
  secure_id: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: 'Zip code field is required' })
  zip_code: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: 'State field is required' })
  state: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: 'City field is required' })
  city: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: 'Street field is required' })
  street: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: 'District field is required' })
  district: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: 'Number field is required' })
  number: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: 'Complement field is required' })
  complement: string;
}
