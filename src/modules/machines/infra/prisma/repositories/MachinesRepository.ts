import { UUID } from "node:crypto"

import { MachineEntity } from "@modules/machines/entities/Machine"
import { IFindOneMachineRepository, ICreateMachineRepository, ICreateMachineRequestDTO } from "@modules/machines/repositories"
import { PrismaContext, prisma as prismaClient } from "@shared/infra/prisma/ClientInstance"

export class MachinesRepository implements IFindOneMachineRepository, ICreateMachineRepository {
  prismaContext: PrismaContext

  constructor(ctx?: PrismaContext) {
    this.prismaContext = ctx ?? { client: prismaClient }
  }

  async findBySerialNumber(serialNumber: string): Promise<MachineEntity | null> {
    const { client: prisma  } = this.prismaContext

    const foundMachine = await prisma.machine.findUnique({
      where: {
        serialNumber
      }
    })

    return foundMachine
  }

  async findById(id: number): Promise<MachineEntity | null> {
    const { client: prisma } = this.prismaContext

    const foundMachine = await prisma.machine.findUnique({
      where: {
        id
      }
    })

    return foundMachine
  }

  async findByQrCode(qrCode: UUID): Promise<MachineEntity | null> {
    const { client: prisma } = this.prismaContext

    const foundMachine = await prisma.machine.findUnique({
      where: {
        qrCode: String(qrCode)
      }
    })

    return foundMachine
  }

  async create(data: ICreateMachineRequestDTO): Promise<MachineEntity> {
    const { client: prisma } = this.prismaContext
    const { qrCode, name, type, location, serialNumber } = data

    const createdMachine = await prisma.machine.create({
      data: {
        qrCode,
        name,
        type,
        location,
        serialNumber
      }
    })

    return createdMachine
  }
}
