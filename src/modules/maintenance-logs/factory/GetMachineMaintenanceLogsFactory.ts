import { GetMachineMaintenanceLogsController } from "@modules/maintenance-logs/infra/express/controllers/GetMachineMaintenanceLogsController"
import { MaintenanceLogsRepository } from "@modules/maintenance-logs/infra/prisma/repositories/MaintenanceLogsRepository"
import { GetMachineMaintenanceLogsService } from "@modules/maintenance-logs/services/GetMachineMaintenanceLogsService"

export const getMachineMaintenanceLogsFactory = () => {
    const repository = new MaintenanceLogsRepository()
    const service = new GetMachineMaintenanceLogsService(repository)
    return new GetMachineMaintenanceLogsController(service)
}