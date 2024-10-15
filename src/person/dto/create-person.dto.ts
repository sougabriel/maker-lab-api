import { IsEmail, IsPhoneNumber, IsString } from "class-validator";

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
}
