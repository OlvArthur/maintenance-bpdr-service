import { MaintenanceLogEntity } from "@modules/maintenance-logs/entities/MaintenanceLog"

export interface ICloseMaintenanceLogRepository {
  close(id: number): Promise<MaintenanceLogEntity>
}
