import { Injectable } from '@nestjs/common';
import { CreatePrint3dDto } from './dto/create-print3d.dto';
import { UpdatePrint3dDto } from './dto/update-print3d.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class Print3dService {
  constructor(private prisma: PrismaService) {}
  
  async create(data: CreatePrint3dDto) {
    return await this.prisma.print3D.create({ data });
  }

  async findAll() {
    return await this.prisma.print3D.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.print3D.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdatePrint3dDto) {
    return await this.prisma.print3D.update({ data, where: { id } });
  }

  async updateAll(data: UpdatePrint3dDto) {
    return await this.prisma.print3D.updateMany({ data });
  }

  async remove(id: string) {
    return await this.prisma.print3D.delete({ where: { id } });
  }

  async removeAll() {
    return await this.prisma.print3D.deleteMany();
  }
}
