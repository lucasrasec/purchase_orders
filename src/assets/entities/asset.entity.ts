import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Asset {
  @PrimaryColumn()
  id: number;

  @Column()
  symbol: string;
}
