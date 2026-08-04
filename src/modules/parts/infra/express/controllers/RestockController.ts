import { IRestockService } from '@modules/parts/services/interfaces/IRestockService'
import { success } from '@shared/commons'
import { BaseController } from '@shared/controller'
import { HttpRequest, HttpResponse } from '@shared/interfaces'

export class RestockController implements BaseController {
    constructor(private restockService: IRestockService) {}

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const { partId } = httpRequest.params
        const { quantityToAdd } = httpRequest.body

        await this.restockService.execute(Number(partId), Number(quantityToAdd))

        return success({})
    }
}