import { listPartsFactory } from '@modules/parts/factory/ListPartsFactory'
import { adaptExpressRouter } from '@shared/infra/express/adapters'
import { Router } from 'express'

export const partsRouters = Router()

partsRouters.get(
    '/',
    adaptExpressRouter(listPartsFactory())
)