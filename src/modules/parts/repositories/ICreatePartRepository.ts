import { PartEntity } from '@modules/parts/entities/Part'

export interface ICreatePartRequestDTO {
    sku: string
    name: string
    quantityOnHand: number
    minThreshold: number
    unit: string
    location: string
}

export interface ICreatePartRepository {
    create(data: ICreatePartRequestDTO): Promise<PartEntity>
}