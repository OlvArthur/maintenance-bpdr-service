import { PartEntity } from '@modules/parts/entities/Part'

export interface IListPartsService {
    execute(): Promise<PartEntity[]>
}