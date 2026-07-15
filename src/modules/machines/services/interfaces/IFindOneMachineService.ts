import { MachineEntity } from '@modules/machines/entities/Machine'

export interface IFindOneMachineService {
    execute(id: number): Promise<MachineEntity>
}