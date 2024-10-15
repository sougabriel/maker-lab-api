import { Injectable } from '@nestjs/common';
import { CreateMicroprocessorDto } from './dto/create-microprocessor.dto';
import { UpdateMicroprocessorDto } from './dto/update-microprocessor.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MicroprocessorService {
  constructor(private prisma: PrismaService) { }

  async create(data: CreateMicroprocessorDto) {
    return await this.prisma.microprocessor.create({ data });
  }

  async findAll() {
    return await this.prisma.microprocessor.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.microprocessor.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateMicroprocessorDto) {
    return await this.prisma.microprocessor.update({ data, where: { id } });
  }

  async updateAll(data: UpdateMicroprocessorDto) {
    return await this.prisma.microprocessor.updateMany({ data });
  }

  async remove(id: string) {
    return await this.prisma.microprocessor.delete({ where: { id } });
  }

  async removeAll() {
    return await this.prisma.microprocessor.deleteMany();
  }
}
