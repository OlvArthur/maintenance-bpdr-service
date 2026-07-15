import { MaintenanceLogEntity } from '@modules/maintenance-logs/entities/MaintenanceLog'
import { IGetMachineMaintenanceLogsRepository } from '@modules/maintenance-logs/repositories/IGetMachineMaintenanceLogsRepository'
import { Context, prisma as prismaClient } from '@shared/infra/prisma/ClientInstance'

export class MaintenanceLogsRepository implements IGetMachineMaintenanceLogsRepository {
    prismaContext: Context

    constructor(ctx?: Context) {
        this.prismaContext = ctx ?? { prisma: prismaClient }
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