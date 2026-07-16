import { PartEntity } from '@modules/parts/entities/Part'
import { ICreatePartRequestDTO } from '@modules/parts/repositories'

export interface ICreatePartService {
    execute(data: ICreatePartRequestDTO): Promise<PartEntity>
}