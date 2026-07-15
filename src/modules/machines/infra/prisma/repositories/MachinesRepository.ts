import { MachineEntity } from "@modules/machines/entities/Machine"
import { IFindOneMachineRepository, ICreateMachineRepository, ICreateMachineRequestDTO } from "@modules/machines/repositories"
import { Context, prisma as prismaClient } from "@shared/infra/prisma/ClientInstance"

export class MachinesRepository implements IFindOneMachineRepository, ICreateMachineRepository {
  prismaContext: Context

  constructor(ctx?: Context) {
    this.prismaContext = ctx ?? { prisma: prismaClient }
  }

  async findBySerialNumber(serialNumber: string): Promise<MachineEntity | null> {
    const { prisma } = this.prismaContext

    const foundMachine = await prisma.machine.findUnique({
      where: {
        serialNumber
      }
    })

    return foundMachine
  }

  async create(data: ICreateMachineRequestDTO): Promise<MachineEntity> {
    const { prisma } = this.prismaContext
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
