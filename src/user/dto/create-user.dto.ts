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
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(8)
    @MaxLength(32)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'password too weak' })
    password: string;

    @IsOptional()
    @IsNumber()
    @MinLength(1)
    accessLevel?: number;

    @IsOptional()
    @IsBoolean()
    isActive?: boolean;
}