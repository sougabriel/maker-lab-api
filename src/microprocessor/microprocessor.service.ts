import { Injectable } from '@nestjs/common';
import { CreateMicroprocessorDto } from './dto/create-microprocessor.dto';
import { UpdateMicroprocessorDto } from './dto/update-microprocessor.dto';

@Injectable()
export class MicroprocessorService {
  create(createMicroprocessorDto: CreateMicroprocessorDto) {
    return 'This action adds a new microprocessor';
  }

  findAll() {
    return `This action returns all microprocessor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} microprocessor`;
  }

  update(id: number, updateMicroprocessorDto: UpdateMicroprocessorDto) {
    return `This action updates a #${id} microprocessor`;
  }

  remove(id: number) {
    return `This action removes a #${id} microprocessor`;
  }
}
