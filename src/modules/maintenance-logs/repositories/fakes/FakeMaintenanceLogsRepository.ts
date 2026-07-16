import { MaintenanceLogEntity } from '@modules/maintenance-logs/entities/MaintenanceLog'
import { IFindOneMaintenanceLogRepository, ICloseMaintenanceLogRepository } from '@modules/maintenance-logs/repositories'
import { AppError } from '@shared/errors'

export class FakeMaintenanceLogsRepository implements IFindOneMaintenanceLogRepository, ICloseMaintenanceLogRepository {
  private logs: MaintenanceLogEntity[] = []

  async findById(id: number): Promise<MaintenanceLogEntity | null> {
    const found = this.logs.find(log => log.id === id)

    if(!found) return null

    return found
  }

  async close(id: number): Promise<MaintenanceLogEntity> {
    const logIndex = this.logs.findIndex(log => log.id === id)

    if(logIndex === -1) throw new AppError('Close Maintenance Log Error: Log not found', 404)

    const closedLog = {
      ...this.logs[logIndex],
      status: 'COMPLETED' as const,
      completedAt: new Date(),
      updatedAt: new Date()
    }

    this.logs[logIndex] = closedLog as MaintenanceLogEntity

    return closedLog as MaintenanceLogEntity
  }
}
