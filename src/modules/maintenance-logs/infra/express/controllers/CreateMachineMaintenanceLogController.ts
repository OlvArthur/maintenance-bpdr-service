import { MaintenanceLogEntity } from '@modules/maintenance-logs/entities/MaintenanceLog'
import { ICreateMachineMaintenanceLogService } from '@modules/maintenance-logs/services/interfaces/ICreateMachineMaintenanceLogService'
import { created } from '@shared/commons'
import { BaseController } from '@shared/controller'
import { HttpRequest, HttpResponse } from '@shared/interfaces'

export class CreateMachineMaintenanceLogController implements BaseController {
    constructor(private createMachineMaintenanceLogService: ICreateMachineMaintenanceLogService) {}

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const { description, partsUsed, type } = httpRequest.body
        const { machineId } = httpRequest.params
        const { id: technicianId } = httpRequest.user

        const createdLog: MaintenanceLogEntity = await this.createMachineMaintenanceLogService.execute({
            description,
            machineId: Number(machineId),
            partsUsed,
            technicianId,
            type
        })

        return created(createdLog)
    }
}