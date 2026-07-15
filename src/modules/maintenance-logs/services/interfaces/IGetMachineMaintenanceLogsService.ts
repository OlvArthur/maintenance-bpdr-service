import { MaintenanceLogEntity } from '@modules/maintenance-logs/entities/MaintenanceLog'

export interface IGetMachineMaintenanceLogsService {
    execute(machineId: number): Promise<MaintenanceLogEntity[]>
}