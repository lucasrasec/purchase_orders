import { Injectable } from '@nestjs/common';
import { CreateAssetDto } from './dto/create-asset.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Asset } from './entities/asset.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AssetsService {
  constructor(@InjectRepository(Asset) private assestRepo: Repository<Asset>) {}

  create(createAssetDto: CreateAssetDto) {
    const asset = this.assestRepo.create(createAssetDto);
    return this.assestRepo.save(asset);
  }

  findAll() {
    return this.assestRepo.find();
  }

  findOne(id: number) {
    return this.assestRepo.findOneBy({ id });
  }

  // update(id: number, updateAssetDto: UpdateAssetDto) {
  //   return `This action updates a #${id} asset`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} asset`;
  // }
}
