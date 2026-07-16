import { MaintenanceLogEntity } from '@modules/maintenance-logs/entities/MaintenanceLog'

export interface IFindOneMaintenanceLogRepository {
  findById(id: number): Promise<MaintenanceLogEntity | null>
}
