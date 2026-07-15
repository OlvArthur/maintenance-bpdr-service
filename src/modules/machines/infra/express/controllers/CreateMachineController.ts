import { MachineEntity } from '@modules/machines/entities/Machine'
import { ICreateMachineService } from '@modules/machines/services/interfaces/ICreateMachineService'
import { created } from '@shared/commons'
import { BaseController } from '@shared/controller'
import { HttpRequest, HttpResponse } from '@shared/interfaces'

export class CreateMachineController implements BaseController {
  constructor(private createMachineService: ICreateMachineService) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { name, type, location, serialNumber } = httpRequest.body

    const createdMachine: MachineEntity = await this.createMachineService.execute({
      name,
      type,
      location,
      serialNumber
    })

    return created(createdMachine)
  }
}
