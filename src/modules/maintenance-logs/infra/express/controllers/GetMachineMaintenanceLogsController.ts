import { IGetMachineMaintenanceLogsService } from '@modules/maintenance-logs/services/interfaces/IGetMachineMaintenanceLogsService'
import { BaseController } from '@shared/controller'
import { HttpRequest, HttpResponse } from '@shared/interfaces'
import { MaintenanceLogEntity } from '@modules/maintenance-logs/entities/MaintenanceLog'
import { success } from '@shared/commons'

export class GetMachineMaintenanceLogsController implements BaseController {
    constructor(private getMachineMaintenanceLogsService: IGetMachineMaintenanceLogsService) {}

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const { machineId } = httpRequest.params

        const logs: MaintenanceLogEntity[] = await this.getMachineMaintenanceLogsService.execute(machineId)

        return success(logs)
    }
}