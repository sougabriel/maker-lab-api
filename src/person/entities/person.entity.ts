import { Entry } from "src/entry/entities/entry.entity";

export class Person {
    id?: string;
    fullname: string;
    email: string;
    phoneNumber: string;
    publicType?: string;
    createdAt?: Date;
    updatedAt?: Date;
    Entry?: Entry[];
}
