import { Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'

import { getMachineMaintenanceLogsFactory, createMachineMaintenanceLogFactory } from '@modules/maintenance-logs/factory'
import { adaptExpressRouter } from '@shared/infra/express/adapters'
import { MaintenanceType } from '@modules/maintenance-logs/entities/MaintenanceLog'


export const machineMaintenanceLogsRouters = Router({ mergeParams: true })

machineMaintenanceLogsRouters.get(
    '/',
    celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            machineId: Joi.number().required()
        })
    }),
    adaptExpressRouter(getMachineMaintenanceLogsFactory())
)

machineMaintenanceLogsRouters.post(
    '/',
    celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            machineId: Joi.number().required()
        }),
        [Segments.BODY]: Joi.object().keys({
            type: Joi.string().valid(...Object.values(MaintenanceType)).required(),
            description: Joi.string().required(),
            partsUsed: Joi.array().items(
                Joi.object().keys({
                    partId: Joi.number().required(),
                    quantityUsed: Joi.number().required()
                })
            )
        })
    }),
    adaptExpressRouter(createMachineMaintenanceLogFactory())
)

