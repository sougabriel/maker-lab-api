import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) { }

  async create(data: CreateEventDto) {
    return await this.prisma.event.create({ data });
  }

  async findAll() {
    return await this.prisma.event.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.event.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateEventDto) {
    return await this.prisma.event.update({ data, where: { id } });
  }

  async updateAll(data: UpdateEventDto) {
    return await this.prisma.event.updateMany({ data });
  }

  async remove(id: number) {
    return await this.prisma.event.delete({ where: { id } });
  }

  async removeAll() {
    return await this.prisma.event.deleteMany();
  }
}
