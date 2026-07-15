import { UUID } from 'node:crypto'

import { MachineEntity } from '@modules/machines/entities/Machine'
import { ICreateMachineRepository, ICreateMachineRequestDTO, IFindOneMachineRepository } from '@modules/machines/repositories'

export class FakeMachinesRepository implements ICreateMachineRepository, IFindOneMachineRepository {
  private machines: MachineEntity[] = []

  async findBySerialNumber(serialNumber: string): Promise<MachineEntity | null> {
    const found = this.machines.find(machine => machine.serialNumber === serialNumber)

    if(!found) return null

    return found
  }

  async findById(id: number): Promise<MachineEntity | null> {
    const found = this.machines.find(machine => machine.id === id)

    if(!found) return null

    return found
  }

  async findByQrCode(qrCode: UUID): Promise<MachineEntity | null> {
    const found = this.machines.find(machine => machine.qrCode === qrCode)

    if(!found) return null

    return found
  }

  async create({ qrCode, name, type, location, serialNumber }: ICreateMachineRequestDTO): Promise<MachineEntity> {
    const machineToCreate = {
      id: this.machines.length + 1,
      qrCode,
      name,
      type,
      location,
      serialNumber,
      status: 'OPERATIONAL' as const,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    this.machines.push(machineToCreate)

    return machineToCreate
  }
}
