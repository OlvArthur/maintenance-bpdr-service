import { MachineEntity } from "@modules/machines/entities/Machine";
import { IFindMachineByIdService } from "@modules/machines/services/interfaces/IFindMachineByIdService";
import { success } from "@shared/commons";
import { BaseController } from "@shared/controller";
import { HttpRequest, HttpResponse } from "@shared/interfaces";

export class FindOneMachineController implements BaseController {
    constructor(private findMachineByIdService: IFindMachineByIdService) {}

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const { id } = httpRequest.params

        const foundMachine: MachineEntity = await this.findMachineByIdService.execute(Number(id))

        return success(foundMachine)
    }
}