import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateAssetDto {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsString()
  symbol: string;
}
