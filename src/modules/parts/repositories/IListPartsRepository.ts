import { PartEntity } from '@modules/parts/entities/Part'

export interface IListPartsRepository {
    get(): Promise<PartEntity[]>
}