import { IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateMicroprocessorDto {
    @IsString()
    model: string;

    @IsString()
    manufacturer: string;

    @IsNumber()
    @MinLength(0)
    memoryRam: number;
    
    @IsOptional()
    @IsNumber()
    @MinLength(0)
    storage?: number;
    
    @IsString()
    conections: string;
    
    @IsNumber()
    @MinLength(0)
    amount: number;
}
