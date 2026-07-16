import { IFindLowStockService } from '@modules/parts/services/interfaces/IFindLowStockService'
import { success } from '@shared/commons'
import { BaseController } from '@shared/controller'
import { HttpRequest, HttpResponse } from '@shared/interfaces'

export class FindLowStockController implements BaseController {
    constructor(private findLowStockService: IFindLowStockService) {}

    async handle(_: HttpRequest): Promise<HttpResponse> {
        const lowStockParts = await this.findLowStockService.execute()

        return success(lowStockParts)
    }
}