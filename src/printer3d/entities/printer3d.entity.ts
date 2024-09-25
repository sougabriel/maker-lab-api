import { Print3d } from "src/print3d/entities/print3d.entity";

export class Printer3d {
    id?: number;
    model: string;
    manufacturer: string;
    printType: string;
    createdAt?: Date;
    updatedAt?: Date;
    Print3D: Print3d[];
}
