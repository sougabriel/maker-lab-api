import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}
  
  async create(data: CreateProductDto) {
    return await this.prisma.product.create({ data });
  }

  async findAll() {
    return await this.prisma.product.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.product.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateProductDto) {
    return await this.prisma.product.update({ data, where: { id } });
  }

  async updateAll(data: UpdateProductDto) {
    return await this.prisma.product.updateMany({ data });
  }

  async remove(id: number) {
    return await this.prisma.product.delete({ where: { id } });
  }

  async removeAll() {
    return await this.prisma.product.deleteMany();
  }
}
