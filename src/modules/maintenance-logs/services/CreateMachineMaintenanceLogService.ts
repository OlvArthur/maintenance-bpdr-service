import { ICreateMachineMaintenanceLogService } from '@modules/maintenance-logs/services/interfaces/ICreateMachineMaintenanceLogService'
import { ICreateMachineMaintenanceLogRepository, ICreateMachineMaintenanceLogRequestDTO } from '../repositories/ICreateMachineMaintenanceLogRepository';
import { MaintenanceLogEntity } from '../entities/MaintenanceLog';
import { AppError } from '@shared/errors';

export class CreateMachineMaintenanceLogService implements ICreateMachineMaintenanceLogService {
    constructor(private maintenanceLogsRepository: ICreateMachineMaintenanceLogRepository ) {}

    async execute({ description, machineId, partsUsed, technicianId, type }: ICreateMachineMaintenanceLogRequestDTO): Promise<MaintenanceLogEntity> {
        if(!description) throw new AppError('Create machine maintenance log service: Missing log description')
        if(!machineId) throw new AppError('Create machine maintenance log service: Missing log machineId')
        if(!partsUsed) throw new AppError('Create machine maintenance log service: Missing log partsUsed')
        if(!technicianId) throw new AppError('Create machine maintenance log service: Missing log technicianId')
        if(!type) throw new AppError('Create machine maintenance log service: Missing log type')

        const createdLog = await this.maintenanceLogsRepository.createMachineMaintenanceLog({
            description,
            machineId,
            partsUsed,
            technicianId,
            type
        })

        return createdLog
    }
}