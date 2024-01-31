import { IsInt, IsNotEmpty, IsPositive } from 'class-validator';

export class CreateOrderDto {
  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  price: number;

  @IsInt()
  @IsNotEmpty()
  asset_id: number;
}
