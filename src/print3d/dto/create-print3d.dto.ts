import { IsNumber, IsString, MinLength } from "class-validator";
import { Printer3d } from "src/printer3d/entities/printer3d.entity";

export class CreatePrint3dDto {
    @IsString()
    title: string;

    @IsString()
    printUrl?: string;

    @IsNumber()
    @MinLength(0)
    price: number;
    
    printer3D: Printer3d;
    
    @IsNumber()
    @MinLength(1)
    printer3DId: number;
}
