import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { hash } from 'bcrypt';

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

  findByEmail(email: string) {
    this.prisma.user.findUnique({
      where: { email },
    })
  }
}
