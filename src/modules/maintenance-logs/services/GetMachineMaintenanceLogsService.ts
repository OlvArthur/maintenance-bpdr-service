import { AppError } from '@shared/errors'
import { MaintenanceLogEntity } from '@modules/maintenance-logs/entities/MaintenanceLog'
import { IGetMachineMaintenanceLogsRepository } from '@modules/maintenance-logs/repositories/IGetMachineMaintenanceLogsRepository'
import { IGetMachineMaintenanceLogsService } from '@modules/maintenance-logs/services/interfaces/IGetMachineMaintenanceLogsService'

export class GetMachineMaintenanceLogsService implements IGetMachineMaintenanceLogsService {
    constructor(private maintenanceLogsRepository: IGetMachineMaintenanceLogsRepository) {}


    async execute(machineId: number): Promise<MaintenanceLogEntity[]> {
        if(!machineId) throw new AppError('Get machine maintenance logs service: Missing machine id')

        const logs = await this.maintenanceLogsRepository.getMachineMaintenanceLogs(machineId)

        return logs
    }
}