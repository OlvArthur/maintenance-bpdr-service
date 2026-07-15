import { Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'

import { createMachineFactory, findMachineByIdFactory, findMachineByQrCodeFactory } from '@modules/machines/factory'
import { adaptExpressRouter } from '@shared/infra/express/adapters'
// import authMiddleware from '@modules/auth/...' — role-gate this route to
// 'admin' once the gateway forwards x-user-role (see step 2 of the build plan)

export const machinesRouters = Router()

machinesRouters.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      type: Joi.string().required(),
      location: Joi.string().required(),
      serialNumber: Joi.string().required()
    })
  }),
  adaptExpressRouter(createMachineFactory())
)


machinesRouters.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required()
    })
  }),
  adaptExpressRouter(findMachineByIdFactory())
)

machinesRouters.get(
  '/by-qr/:qrCode',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      qrCode: Joi.string().required()
    })
  }),
  adaptExpressRouter(findMachineByQrCodeFactory())
)