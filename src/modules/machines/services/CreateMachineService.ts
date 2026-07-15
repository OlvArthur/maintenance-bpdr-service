import { randomUUID } from 'node:crypto'

import { AppError } from '@shared/errors'

import { ICreateMachineService, ICreateMachineRequest } from '@modules/machines/services/interfaces/ICreateMachineService'
import { MachineEntity } from '@modules/machines/entities/Machine'
import { ICreateMachineRepository, IFindOneMachineRepository } from '@modules/machines/repositories'

export class CreateMachineService implements ICreateMachineService {
  constructor(
    private machinesRepository: ICreateMachineRepository & IFindOneMachineRepository
  ) {}

  async execute({ name, type, location, serialNumber }: ICreateMachineRequest): Promise<MachineEntity> {
    if(!name) throw new AppError('Create Machine Service: Missing name')
    if(!type) throw new AppError('Create Machine Service: Missing type')
    if(!location) throw new AppError('Create Machine Service: Missing location')
    if(!serialNumber) throw new AppError('Create Machine Service: Missing serialNumber')

    const alreadyExistentMachine = await this.machinesRepository.findBySerialNumber(serialNumber)

    if(alreadyExistentMachine) throw new AppError('Create Machine Service: Serial number already registered')

    // qrCode is generated here, never accepted from the client — this is the
    // unguessable token printed on the sticker, deliberately decoupled from
    // the machine's numeric id (see design discussion: enumeration risk +
    // reprint/reissue flexibility).
    const qrCode = randomUUID()

    const createdMachine = await this.machinesRepository.create({
      qrCode,
      name,
      type,
      location,
      serialNumber
    })

    return createdMachine
  }
}
