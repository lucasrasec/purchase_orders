import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Asset } from 'src/assets/entities/asset.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private orderRepo: Repository<Order>,
    @InjectRepository(Asset) private assetRepo: Repository<Asset>,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const order = Order.create(createOrderDto.price);

    const asset = await this.assetRepo.findOneBy({
      id: createOrderDto.asset_id,
    });

    if (asset) {
      order.asset = asset;
    } else {
      const asset = new Asset();
      asset.id = createOrderDto.asset_id;
      const newAsset = await this.assetRepo.save(asset);

      order.asset = newAsset;
    }

    await this.orderRepo.save(order);
    return order;
  }

  findAll() {
    const orders = this.orderRepo.find();
    return orders;
  }

  async findOne(id: string) {
    const order = await this.orderRepo.findOneBy({ id });
    return order;
  }
}
