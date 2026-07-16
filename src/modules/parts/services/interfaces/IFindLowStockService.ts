import { PartEntity } from '@modules/parts/entities/Part'

export interface IFindLowStockService {
    execute(): Promise<PartEntity[]>
}