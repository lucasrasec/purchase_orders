import { Order } from 'src/orders/entities/order.entity';
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Asset {
  @PrimaryColumn()
  id: number;

  @Column()
  symbol: string = 'Basic';

  @OneToMany(() => Order, (item) => item.asset)
  order: Order;
}
