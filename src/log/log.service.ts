import { Injectable } from '@nestjs/common';
import { CreateLogDto } from './dto/create-log.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LogService {
  constructor(private prisma: PrismaService) { }

  async create(data: CreateLogDto) {
    return await this.prisma.log.create({ data });
  }

  async findAll() {
    return await this.prisma.log.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.log.findUnique({ where: { id } });
  }

}
