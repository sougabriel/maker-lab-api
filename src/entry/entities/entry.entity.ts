import { Person } from "src/person/entities/person.entity";

export class Entry {
    id?: number;
    entryDate: Date;
    entryTime?: Date;
    purpose?: String;
    person: Person;
    personId: string;
    createdAt?: Date;
}
