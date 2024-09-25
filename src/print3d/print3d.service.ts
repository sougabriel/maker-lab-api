import { Injectable } from '@nestjs/common';
import { CreatePrint3dDto } from './dto/create-print3d.dto';
import { UpdatePrint3dDto } from './dto/update-print3d.dto';

@Injectable()
export class Print3dService {
  create(createPrint3dDto: CreatePrint3dDto) {
    return 'This action adds a new print3d';
  }

  findAll() {
    return `This action returns all print3d`;
  }

  findOne(id: number) {
    return `This action returns a #${id} print3d`;
  }

  update(id: number, updatePrint3dDto: UpdatePrint3dDto) {
    return `This action updates a #${id} print3d`;
  }

  remove(id: number) {
    return `This action removes a #${id} print3d`;
  }
}
