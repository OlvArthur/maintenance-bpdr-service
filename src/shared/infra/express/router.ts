import { Router } from 'express'

import { machinesRouters } from '@modules/machines/infra/express/routes/machines.routes'
import { machineMaintenanceLogsRouters } from '@modules/maintenance-logs/infra/express/routes/machine-maintenance-logs.routes'
import { logsRouters } from '@modules/maintenance-logs/infra/express/routes/logs.routes'
import { partsRouters } from '@modules/parts/infra/express/routes/parts.routes'

const router = Router()

router.use('/machines', machinesRouters)
router.use('/machines/:machineId/logs', machineMaintenanceLogsRouters)
router.use('/logs', logsRouters)
router.use('/parts', partsRouters)

router.get('/health-check', (_, response) => {
    return response.json({ message: 'Hello world' })
})

export default router