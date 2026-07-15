import { MaintenanceLogEntity } from '@modules/maintenance-logs/entities/MaintenanceLog'

export interface IGetMachineMaintenanceLogsRepository {
    getMachineMaintenanceLogs(machineId: number): Promise<MaintenanceLogEntity[]>
}