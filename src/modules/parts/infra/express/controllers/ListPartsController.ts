import { IListPartsService } from "@modules/parts/services/interfaces/IListPartsService";
import { success } from "@shared/commons";
import { BaseController } from "@shared/controller";
import { HttpRequest, HttpResponse } from "@shared/interfaces";

export class ListPartsController implements BaseController {
    constructor(private listPartsService: IListPartsService) {}

    async handle(_: HttpRequest): Promise<HttpResponse> {
        const parts = await this.listPartsService.execute()

        return success(parts)
    }
}