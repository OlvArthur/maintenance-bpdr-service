import { MaintenanceLogEntity } from '@modules/maintenance-logs/entities/MaintenanceLog'

export type MaintenanceType = 'PREVENTIVE' | 'CORRECTIVE' | 'INSPECTION'

export interface ICreateMachineMaintenanceLogRequestDTO {
    machineId: number
    technicianId: number
    type: MaintenanceType
    description: string
    partsUsed: { partId: number, quantityUsed: number }[]
}

export interface ICreateMachineMaintenanceLogRepository {
    createMachineMaintenanceLog(data: ICreateMachineMaintenanceLogRequestDTO): Promise<MaintenanceLogEntity>
}