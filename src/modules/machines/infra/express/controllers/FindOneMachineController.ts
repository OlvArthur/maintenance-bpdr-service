import { MachineEntity } from "@modules/machines/entities/Machine";
import { IFindOneMachineService } from "@modules/machines/services/interfaces/IFindOneMachineService";
import { success } from "@shared/commons";
import { BaseController } from "@shared/controller";
import { HttpRequest, HttpResponse } from "@shared/interfaces";

export class FindOneMachineController implements BaseController {
    constructor(private findOneMachineService: IFindOneMachineService) {}

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const { id } = httpRequest.params

        const foundMachine: MachineEntity = await this.findOneMachineService.execute(Number(id))

        return success(foundMachine)
    }
}