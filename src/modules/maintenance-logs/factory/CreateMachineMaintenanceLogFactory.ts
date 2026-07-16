import { CreateMachineMaintenanceLogController } from '@modules/maintenance-logs/infra/express/controllers/CreateMachineMaintenanceLogController'
import { MaintenanceLogsRepository } from '@modules/maintenance-logs/infra/prisma/repositories/MaintenanceLogsRepository'
import { CreateMachineMaintenanceLogService } from '@modules/maintenance-logs/services/CreateMachineMaintenanceLogService'

export const createMachineMaintenanceLogFactory = () => {
    const repository = new MaintenanceLogsRepository()
    const service = new CreateMachineMaintenanceLogService(repository)
    return new CreateMachineMaintenanceLogController(service)
}