import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Asset } from 'src/assets/entities/asset.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Asset])],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
