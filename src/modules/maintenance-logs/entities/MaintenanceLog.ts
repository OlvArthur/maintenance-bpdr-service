import { MaintenanceLog, MaintenanceLogStatus } from '../../../../prisma/client'

export enum MaintenanceType {
    PREVENTIVE = 'PREVENTIVE',
    CORRECTIVE = 'CORRECTIVE',
    INSPECTION = 'INSPECTION'
} 

export class MaintenanceLogEntity implements MaintenanceLog {
    constructor(partial: Partial<MaintenanceLogEntity>) {
        Object.assign(this, partial)
    }

    id: number

    machineId: number

    technicianId: number

    type: MaintenanceType

    description: string

    status: MaintenanceLogStatus

    startedAt: Date

    completedAt: Date | null

    createdAt: Date

    updatedAt: Date
}