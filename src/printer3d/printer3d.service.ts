import { Injectable } from '@nestjs/common';
import { CreatePrinter3dDto } from './dto/create-printer3d.dto';
import { UpdatePrinter3dDto } from './dto/update-printer3d.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class Printer3dService {
  constructor(private prisma: PrismaService) {}
  
  async create(data: CreatePrinter3dDto) {
    return await this.prisma.printer3D.create({ data });
  }

  async findAll() {
    return await this.prisma.printer3D.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.printer3D.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdatePrinter3dDto) {
    return await this.prisma.printer3D.update({ data, where: { id } });
  }

  async updateAll(data: UpdatePrinter3dDto) {
    return await this.prisma.printer3D.updateMany({ data });
  }

  async remove(id: number) {
    return await this.prisma.printer3D.delete({ where: { id } });
  }

  async removeAll() {
    return await this.prisma.printer3D.deleteMany();
  }
}
