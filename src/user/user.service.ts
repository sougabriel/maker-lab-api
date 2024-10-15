import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { hash } from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createUserDto: CreateUserDto) {
    const data = {
      ...createUserDto,
      password: await hash(createUserDto.password, 8)
    };
    const createdUser = await this.prisma.user.create({ data });
    return {
      ...createdUser,
      password: undefined
    };
  }

  async findByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: { email },
    })
  }

  async update(email: string, data: UpdateUserDto) {
    const user = await this.prisma.user.update({ 
      data, 
      where: { email } 
    });
    return {
      ...user,
      password: undefined
    }
  }

  async delete(email: string) {
    const user = await this.prisma.user.update({
      data: {isActive: false},
      where: { email }
    });
    return {
      ...user,
      password: undefined
    }
  }

}
