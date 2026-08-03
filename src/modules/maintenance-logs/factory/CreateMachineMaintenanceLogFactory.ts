import { CreateMachineMaintenanceLogController } from '@modules/maintenance-logs/infra/express/controllers/CreateMachineMaintenanceLogController'
import { MaintenanceLogsRepository } from '@modules/maintenance-logs/infra/prisma/repositories/MaintenanceLogsRepository'
import { CreateMachineMaintenanceLogService } from '@modules/maintenance-logs/services/CreateMachineMaintenanceLogService'
import { PartsRepository } from '@modules/parts/infra/prisma/repositories/PartsRepository'
import { PrismaTransactionProvider } from '@shared/providers/TransactionProvider/implementations/PrismaTransactionProvider'

export const createMachineMaintenanceLogFactory = () => {
    const transactionProvider = new PrismaTransactionProvider()
    const service = new CreateMachineMaintenanceLogService(
        transactionProvider,
        (ctx) => new MaintenanceLogsRepository(ctx),
        (ctx) => new PartsRepository(ctx)
    )

    return new CreateMachineMaintenanceLogController(service)
}