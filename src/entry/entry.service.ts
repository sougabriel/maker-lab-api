import { Injectable } from '@nestjs/common';
import { CreateEntryDto } from './dto/create-entry.dto';
import { UpdateEntryDto } from './dto/update-entry.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EntryService {
  constructor(private prisma: PrismaService) { }

  async create(data: CreateEntryDto) {
    return await this.prisma.entry.create({ data });
  }

  async findAll() {
    return await this.prisma.entry.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.entry.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateEntryDto) {
    return await this.prisma.entry.update({ data, where: { id } });
  }

  async updateAll(data: UpdateEntryDto) {
    return await this.prisma.entry.updateMany({ data });
  }

  async remove(id: number) {
    return await this.prisma.entry.delete({ where: { id } });
  }

  async removeAll() {
    return await this.prisma.entry.deleteMany();
  }
}
