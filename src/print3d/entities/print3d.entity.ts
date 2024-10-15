import { Printer3d } from "src/printer3d/entities/printer3d.entity";

export class Print3d {
    id?: string;
    title: string;
    printUrl?: string;
    price: number;
    printer3DId: number;
    createdAt?: Date;
    updatedAt?: Date;
}
