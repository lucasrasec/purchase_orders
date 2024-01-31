import { MaxLength } from 'class-validator';
import { Asset } from 'src/assets/entities/asset.entity';
import {
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  Entity,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';

export enum OrderStatus {
  OPEN = 'open',
  PENDING = 'pending',
  FAILED = 'failed',
}

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  @MaxLength(36)
  id: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column()
  status: OrderStatus = OrderStatus.OPEN;

  @OneToOne(() => Asset, {
    cascade: ['insert'],
    eager: true,
  })
  @JoinColumn({ name: 'asset_id' })
  asset: Asset;

  @CreateDateColumn()
  created_at: Date;

  static create(input: number): Order {
    const order = new Order();
    order.price = input;
    return order;
  }
}
