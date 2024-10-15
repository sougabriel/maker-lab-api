import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePrint3dDto {
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    printUrl?: string;

    @IsNumber()
    price: number;
    
    @IsNumber()
    printer3DId: number;
}
