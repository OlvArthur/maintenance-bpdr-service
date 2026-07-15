import { MachineEntity } from '@modules/machines/entities/Machine'

export interface IFindMachineByIdService {
    execute(id: number): Promise<MachineEntity>
}