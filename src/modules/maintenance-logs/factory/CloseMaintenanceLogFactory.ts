import { MaintenanceLogsRepository } from '@modules/maintenance-logs/infra/prisma/repositories/MaintenanceLogsRepository'
import { CloseMaintenanceLogService } from '@modules/maintenance-logs/services/CloseMaintenanceLogService'
import { CloseMaintenanceLogController } from '@modules/maintenance-logs/infra/express/controllers/CloseMaintenanceLogController'

export const closeMaintenanceLogFactory = () => {
  const repository = new MaintenanceLogsRepository()
  const service = new CloseMaintenanceLogService(repository)
  return new CloseMaintenanceLogController(service)
}
