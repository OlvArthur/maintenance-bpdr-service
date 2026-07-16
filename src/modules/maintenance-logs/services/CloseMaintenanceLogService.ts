import { AppError } from '@shared/errors'

import { ICloseMaintenanceLogService } from '@modules/maintenance-logs/services/interfaces/ICloseMaintenanceLogService'
import { MaintenanceLogEntity } from '@modules/maintenance-logs/entities/MaintenanceLog'
import { IFindOneMaintenanceLogRepository, ICloseMaintenanceLogRepository } from '@modules/maintenance-logs/repositories'
import { StatusCode } from '@shared/commons'

export class CloseMaintenanceLogService implements ICloseMaintenanceLogService {
  constructor(
    private maintenanceLogsRepository: IFindOneMaintenanceLogRepository & ICloseMaintenanceLogRepository
  ) {}

  async execute(id: number): Promise<MaintenanceLogEntity> {
    const existingLog = await this.maintenanceLogsRepository.findById(id)

    if(!existingLog) throw new AppError('Close Maintenance Log Service: Log not found', StatusCode.NOT_FOUND)

    if(existingLog.status === 'COMPLETED') throw new AppError('Close Maintenance Log Service: Log is already closed', StatusCode.CONFLICT)

    const closedLog = await this.maintenanceLogsRepository.close(id)

    return closedLog
  }
}
