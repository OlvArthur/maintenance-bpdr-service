import { ListPartsController } from '@modules/parts/infra/express/controllers/ListPartsController'
import { PartsRepository } from '@modules/parts/infra/prisma/repositories/PartsRepository'
import { ListPartsService } from '@modules/parts/services/ListPartsService'

export const listPartsFactory = () => {
    const repository = new PartsRepository()
    const service = new ListPartsService(repository)
    return new ListPartsController(service)
}