import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";
import { Person } from "src/person/entities/person.entity";

export class CreateEntryDto {
    @IsOptional()
    @IsNumber()
    id?: number;

    @IsDate()
    entryDate: Date;

    @IsOptional()
    @IsDate()
    entryTime?: Date;

    @IsOptional()
    @IsString()
    purpose?: String;

    person: Person;
    
    @IsString()
    personId: string;
}
