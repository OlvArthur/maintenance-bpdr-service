import { Machine, MachineStatus } from '../../../../prisma/client'

export class MachineEntity implements Machine {
  constructor(partial: Partial<MachineEntity>) {
    Object.assign(this, partial)
  }

  id: number

  qrCode: string

  name: string

  type: string

  location: string

  serialNumber: string

  status: MachineStatus

  createdAt: Date

  updatedAt: Date
}


