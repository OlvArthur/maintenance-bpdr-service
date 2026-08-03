import { PartEntity } from '@modules/parts/entities/Part'
import { ICreatePartService } from '@modules/parts/services/interfaces/ICreatePartService'
import { created } from '@shared/commons'
import { BaseController } from '@shared/controller'
import { HttpRequest, HttpResponse } from '@shared/interfaces'

export class CreatePartController implements BaseController {
    constructor(private createPartService: ICreatePartService) {}

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const { location, minThreshold, name, quantityOnHand, sku, unit } = httpRequest.body

        const createdPart: PartEntity = await this.createPartService.execute({
            location,
            minThreshold,
            name,
            quantityOnHand,
            sku,
            unit
        })

        return created(createdPart)
    }
}