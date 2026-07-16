import { FindLowStockController } from '@modules/parts/infra/express/controllers/FindLowStockController'
import { PartsRepository } from '@modules/parts/infra/prisma/repositories/PartsRepository'
import { FindLowStockService } from '@modules/parts/services/FindLowStockService'

export const findLowStockFactory = () => {
    const repository = new PartsRepository()
    const service = new FindLowStockService(repository)
    return new FindLowStockController(service)
}