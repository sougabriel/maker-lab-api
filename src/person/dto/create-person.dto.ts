import { IsEmail, IsOptional, IsPhoneNumber, IsString } from "class-validator";
import { Entry } from "src/entry/entities/entry.entity";

export class CreatePersonDto {
    @IsString()
    fullname: string;
    
    @IsEmail()
    email: string;
    
    @IsString()
    @IsPhoneNumber("BR", { message: 'phone number is not valid.' })
    phoneNumber: string;

    @IsString()
    publicType?: string;
    
    @IsOptional()
    Entry?: Entry[];
}
