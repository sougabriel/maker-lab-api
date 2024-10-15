import { Log } from 'src/log/entities/log.entity';
import { User } from '../entities/user.entity';
import {
  IsBoolean,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto extends User {
  @IsEmail({}, { message: 'Invalid email! Try another!' })
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  @IsOptional()
  @IsString({ message: 'Can not asign numbers as username!' })
  @MinLength(5, {
    message:
      'too short! your username length must be between 5 and 24 characters!',
  })
  @MaxLength(24, {
    message:
      'too long! your username length must be between 5 and 24 characters!',
  })
  username?: string;

  @IsOptional()
  @IsNumber()
  @MinLength(1)
  accessLevel?: number;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  logs?: Log[];
}
