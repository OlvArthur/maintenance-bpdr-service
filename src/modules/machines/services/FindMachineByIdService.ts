import { IFindMachineByIdService } from '@modules/machines/services/interfaces/IFindMachineByIdService'
import { IFindOneMachineRepository } from '@modules/machines/repositories'
import { MachineEntity } from '@modules/machines/entities/Machine'

import { AppError } from '@shared/errors'
import { StatusCode } from '@shared/commons'

export class FindMachineByIdService implements IFindMachineByIdService {
    constructor(
        private machinesRepository: IFindOneMachineRepository
    ) {}

    async execute(id: number): Promise<MachineEntity> {
        if(!id) throw new AppError('Find One Machine Service: Missing Id')

        const foundMachine = await this.machinesRepository.findById(id)

        if(!foundMachine) throw new AppError('Find Machine Service:Id nonexistent', StatusCode.NOT_FOUND)

        return foundMachine
    }
}