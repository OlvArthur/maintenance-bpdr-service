import { PartEntity } from '@modules/parts/entities/Part'

export interface IFindOnePartRepository {
    findById(id: number): Promise<PartEntity | null>
}