import { listPartsFactory, findLowStockFactory, createPartFactory, restockFactory } from '@modules/parts/factory'
import { adaptExpressRouter } from '@shared/infra/express/adapters'
import { celebrate, Joi, Segments } from 'celebrate'
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

partsRouters.post(
    '/',
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            location: Joi.string().required(),
            minThreshold: Joi.number().required(),
            name: Joi.string().required(),
            quantityOnHand: Joi.number().required(),
            sku: Joi.string().required(),
            unit: Joi.string().required()
        })
    }),
    adaptExpressRouter(createPartFactory())
)

partsRouters.patch(
    '/:partId',
    celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            partId: Joi.number().required()
        }),
        [Segments.BODY]: Joi.object().keys({
            quantityToAdd: Joi.number().required()
        })
    }),
    adaptExpressRouter(restockFactory())
)