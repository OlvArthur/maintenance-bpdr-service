import { MachineEntity } from "@modules/machines/entities/Machine"
import { IFindMachineByQrCodeService } from "@modules/machines/services/interfaces/IFindMachineByQrCodeService"
import { success } from "@shared/commons"
import { BaseController } from "@shared/controller"
import { HttpRequest, HttpResponse } from "@shared/interfaces"

export class FindMachineByQrCodeController implements BaseController {
    constructor(private findMachineByQrCodeService: IFindMachineByQrCodeService) {}

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const { qrCode } = httpRequest.params

        const foundMachine: MachineEntity = await this.findMachineByQrCodeService.execute(qrCode)

        return success(foundMachine)
    }
}