import { MaintenanceLogEntity } from '@modules/maintenance-logs/entities/MaintenanceLog'
import { ICloseMaintenanceLogService } from '@modules/maintenance-logs/services/interfaces/ICloseMaintenanceLogService'
import { success } from '@shared/commons'
import { BaseController } from '@shared/controller'
import { HttpRequest, HttpResponse } from '@shared/interfaces'

export class CloseMaintenanceLogController implements BaseController {
  constructor(private closeMaintenanceLogService: ICloseMaintenanceLogService) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { id } = httpRequest.params

    const closedLog: MaintenanceLogEntity = await this.closeMaintenanceLogService.execute(Number(id))

    return success(closedLog, 'maintenance_log_closed')
  }
}
