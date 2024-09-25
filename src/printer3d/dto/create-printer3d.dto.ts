import { IsString } from "class-validator";
import { Print3d } from "src/print3d/entities/print3d.entity";

export class CreatePrinter3dDto {
    @IsString()
    model: string;
    
    @IsString()
    manufacturer: string;

    @IsString()
    printType: string;
    
    Print3D: Print3d[];
}
