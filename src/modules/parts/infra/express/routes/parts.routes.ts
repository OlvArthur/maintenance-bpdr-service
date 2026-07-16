import { listPartsFactory, findLowStockFactory } from '@modules/parts/factory'
import { adaptExpressRouter } from '@shared/infra/express/adapters'
import { Router } from 'express'

export const partsRouters = Router()

partsRouters.get(
    '/',
    adaptExpressRouter(listPartsFactory())
)

partsRouters.get(
    '/low-stock',
    adaptExpressRouter(findLowStockFactory())
)