import { Injectable } from '@nestjs/common';
import { CreatePrinter3dDto } from './dto/create-printer3d.dto';
import { UpdatePrinter3dDto } from './dto/update-printer3d.dto';

@Injectable()
export class Printer3dService {
  create(createPrinter3dDto: CreatePrinter3dDto) {
    return 'This action adds a new printer3d';
  }

  findAll() {
    return `This action returns all printer3d`;
  }

  findOne(id: number) {
    return `This action returns a #${id} printer3d`;
  }

  update(id: number, updatePrinter3dDto: UpdatePrinter3dDto) {
    return `This action updates a #${id} printer3d`;
  }

  remove(id: number) {
    return `This action removes a #${id} printer3d`;
  }
}
