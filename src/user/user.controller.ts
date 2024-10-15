import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { UpdateUserDto } from './dto/update-user.dto';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @IsPublic()
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    try {
      return this.userService.create(createUserDto);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: '',
        },
        HttpStatus.BAD_REQUEST,
        { cause: error, description: 'cannot create user!' },
      );
    }
  }

  @Get(':email')
  findOne(@Param('email') email: string) {
    try {
      return this.userService.findByEmail(email);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: '',
        },
        HttpStatus.BAD_REQUEST,
        { cause: error, description: 'could not find the user!' },
      );
    }
  }

  @Patch(':email')
  update(
    @Param('email') email: string,
    @Body() updateUserDto: UpdateUserDto,
    @CurrentUser() user: User,
  ) {
    if (email === user.email) {
      try {
        return this.userService.update(email, updateUserDto);
      } catch (error) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: '',
          },
          HttpStatus.BAD_REQUEST,
          { cause: error, description: 'cannot create user!' },
        );
      }
    }
  }

  @Patch('/remove')
  delete(
    @Body() email: string,
    @CurrentUser() user: User,
  ) {
    if (email === user.email) {
      return this.userService.delete(email);
    }
  }
}
