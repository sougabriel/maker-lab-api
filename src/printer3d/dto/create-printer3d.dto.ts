import { IsString } from "class-validator";

export class CreatePrinter3dDto {
    @IsString()
    model: string;
    
    @IsString()
    manufacturer: string;

    @IsString()
    printType: string;

}
