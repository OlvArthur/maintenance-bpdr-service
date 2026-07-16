import { Part } from "../../../../prisma/client";

export class PartEntity implements Part {
    constructor(partial: Partial<PartEntity>) {
        Object.assign(this,partial)
    }

    id: number

    sku: string

    name: string

    quantityOnHand: number

    minThreshold: number

    unit: string  // e.g. "unit", "liter", "meter"

    location: string  // shelf/bin reference

    createdAt: Date

    updatedAt: Date
}