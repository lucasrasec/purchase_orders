import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssetsModule } from './assets/assets.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Asset } from './assets/entities/asset.entity';
import { OrdersModule } from './orders/orders.module';
import { Order } from './orders/entities/order.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/purchases',
      entities: [Asset, Order],
      synchronize: true,
      logging: true,
    }),
    AssetsModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
