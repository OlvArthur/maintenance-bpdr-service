import { MaintenanceLogEntity } from '@modules/maintenance-logs/entities/MaintenanceLog'
import { ICloseMaintenanceLogRepository, IFindOneMaintenanceLogRepository } from '@modules/maintenance-logs/repositories'
import { ICreateMachineMaintenanceLogRepository, ICreateMachineMaintenanceLogRequestDTO } from '@modules/maintenance-logs/repositories/ICreateMachineMaintenanceLogRepository'
import { IGetMachineMaintenanceLogsRepository } from '@modules/maintenance-logs/repositories/IGetMachineMaintenanceLogsRepository'
import { Context, prisma as prismaClient } from '@shared/infra/prisma/ClientInstance'

export class MaintenanceLogsRepository implements IGetMachineMaintenanceLogsRepository, ICreateMachineMaintenanceLogRepository, IFindOneMaintenanceLogRepository, ICloseMaintenanceLogRepository {
    prismaContext: Context

    constructor(ctx?: Context) {
        this.prismaContext = ctx ?? { prisma: prismaClient }
    }

    async createMachineMaintenanceLog(data: ICreateMachineMaintenanceLogRequestDTO): Promise<MaintenanceLogEntity> {
        const { prisma } = this.prismaContext
        const { description, machineId, partsUsed, technicianId, type } = data

        const log = await prisma.maintenanceLog.create({
            data: {
                description,
                technicianId,
                type,
                machineId,
                partsUsed: {
                    create: partsUsed
                }
            },
        })
        


        return log

    }

    async getMachineMaintenanceLogs(machineId: number): Promise<MaintenanceLogEntity[]> {
        const { prisma } = this.prismaContext

        const logs = await prisma.maintenanceLog.findMany({
            where: {
                machineId
            },
            include: {
                machine: true
            }
        })


        return logs
    }

    async findById(id: number): Promise<MaintenanceLogEntity | null> {
        const { prisma } = this.prismaContext

        const foundLog = await prisma.maintenanceLog.findUnique({
            where: { id }
        })

        return foundLog
    }

    async close(id: number): Promise<MaintenanceLogEntity> {
    const { prisma } = this.prismaContext

    const closedLog = await prisma.maintenanceLog.update({
      where: { id },
      data: {
        status: 'COMPLETED',
        completedAt: new Date()
      }
    })

    return closedLog
  }
}