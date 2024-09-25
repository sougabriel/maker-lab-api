import { IsString } from "class-validator";

export class CreateManualDto {
    @IsString()
    title: string;

    @IsString()
    author: string;

    @IsString()
    description: string;

    @IsString()
    content: string;
}
