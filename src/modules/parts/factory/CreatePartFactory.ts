import { CreatePartController } from '@modules/parts/infra/express/controllers/CreatePartController'
import { PartsRepository } from '@modules/parts/infra/prisma/repositories/PartsRepository'
import { CreatePartService } from '@modules/parts/services/CreatePartService'

export const createPartFactory = () => {
    const repository = new PartsRepository()
    const service = new CreatePartService(repository)
    return new CreatePartController(service)
}