import { IsDecimal, IsNumber, IsString, MinLength } from "class-validator";

export class CreateProductDto {
    @IsString()
    type: string;

    @IsNumber()
    @MinLength(0)
    price: number;
}
