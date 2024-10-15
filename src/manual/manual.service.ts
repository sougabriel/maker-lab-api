import { Injectable } from '@nestjs/common';
import { CreateManualDto } from './dto/create-manual.dto';
import { UpdateManualDto } from './dto/update-manual.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ManualService {
  constructor(private prisma: PrismaService) { }

  async create(data: CreateManualDto) {
    return await this.prisma.manual.create({ data });
  }

  async findAll() {
    return await this.prisma.manual.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.manual.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateManualDto) {
    return await this.prisma.manual.update({ data, where: { id } });
  }

  async updateAll(data: UpdateManualDto) {
    return await this.prisma.manual.updateMany({ data });
  }

  async remove(id: number) {
    return await this.prisma.manual.delete({ where: { id } });
  }

  async removeAll() {
    return await this.prisma.manual.deleteMany();
  }
}
