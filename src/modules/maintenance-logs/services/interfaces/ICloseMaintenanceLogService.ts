import { MaintenanceLogEntity } from '@modules/maintenance-logs/entities/MaintenanceLog'

export interface ICloseMaintenanceLogService {
  execute(id: number): Promise<MaintenanceLogEntity>
}
