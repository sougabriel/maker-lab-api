import { IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    type: string;

    @IsNumber()
    price: number;
}
