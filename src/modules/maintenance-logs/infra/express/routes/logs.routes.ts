import { Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'

import { closeMaintenanceLogFactory } from '@modules/maintenance-logs/factory'
import { adaptExpressRouter } from '@shared/infra/express/adapters'
// import authMiddleware from '@modules/auth/...' — role-gate to mechanic+
// once the gateway forwards x-user-role (same note as machines.routes.ts)

export const logsRouters = Router()

logsRouters.patch(
  '/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
    })
  }),
  adaptExpressRouter(closeMaintenanceLogFactory())
)
