import { MaintenanceLogEntity } from "@modules/maintenance-logs/entities/MaintenanceLog";
import { ICreateMachineMaintenanceLogRequestDTO } from "@modules/maintenance-logs/repositories/ICreateMachineMaintenanceLogRepository";

export interface ICreateMachineMaintenanceLogService {
    execute(data: ICreateMachineMaintenanceLogRequestDTO): Promise<MaintenanceLogEntity>
}