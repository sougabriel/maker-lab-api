import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";
import { Person } from "src/person/entities/person.entity";

export class CreateEntryDto {
    @IsDate()
    entryDate: Date;

    @IsOptional()
    @IsDate()
    entryTime?: Date;

    @IsOptional()
    @IsString()
    purpose?: string;
    
    @IsString()
    personId: string;
}
