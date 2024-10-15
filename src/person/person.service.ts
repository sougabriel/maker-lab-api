import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PersonService {
  constructor(private prisma: PrismaService) { }

  async create(data: CreatePersonDto) {
    return await this.prisma.person.create({ data });
  }

  async findAll() {
    return await this.prisma.person.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.person.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdatePersonDto) {
    return await this.prisma.person.update({ data, where: { id } });
  }

  async updateAll(data: UpdatePersonDto) {
    return await this.prisma.person.updateMany({ data });
  }

  async remove(id: string) {
    return await this.prisma.person.delete({ where: { id } });
  }

  async removeAll() {
    return await this.prisma.person.deleteMany();
  }
}
