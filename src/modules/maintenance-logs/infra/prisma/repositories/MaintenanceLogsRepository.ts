import { MaintenanceLogEntity } from '@modules/maintenance-logs/entities/MaintenanceLog'
import { ICreateMachineMaintenanceLogRepository, ICreateMachineMaintenanceLogRequestDTO } from '@modules/maintenance-logs/repositories/ICreateMachineMaintenanceLogRepository'
import { IGetMachineMaintenanceLogsRepository } from '@modules/maintenance-logs/repositories/IGetMachineMaintenanceLogsRepository'
import { Context, prisma as prismaClient } from '@shared/infra/prisma/ClientInstance'

export class MaintenanceLogsRepository implements IGetMachineMaintenanceLogsRepository, ICreateMachineMaintenanceLogRepository {
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
            },
        })

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
}