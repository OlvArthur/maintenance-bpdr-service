import { RestockController } from '@modules/parts/infra/express/controllers/RestockController'
import { PartsRepository } from '@modules/parts/infra/prisma/repositories/PartsRepository'
import { RestockService } from '@modules/parts/services/RestockService'

export const restockFactory = () => {
    const repository = new PartsRepository()
    const service = new RestockService(repository)
    return new RestockController(service)
}