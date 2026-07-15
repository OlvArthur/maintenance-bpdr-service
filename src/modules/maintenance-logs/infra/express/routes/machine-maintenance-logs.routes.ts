import { Router } from 'express'

import { getMachineMaintenanceLogsFactory } from '@modules/maintenance-logs/factory'
import { adaptExpressRouter } from '@shared/infra/express/adapters'
import { celebrate, Joi, Segments } from 'celebrate'

export const machineMaintenanceLogsRouters = Router()

machineMaintenanceLogsRouters.get(
    '/:machineId/logs',
    celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            machineId: Joi.string().required()
        })
    }),
    adaptExpressRouter(getMachineMaintenanceLogsFactory())
)

