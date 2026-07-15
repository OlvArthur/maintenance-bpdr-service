import { Router } from 'express'

import { machinesRouters } from '@modules/machines/infra/express/routes/machines.routes'
import { machineMaintenanceLogsRouters } from '@modules/maintenance-logs/infra/express/routes/machine-maintenance-logs.routes'

const router = Router()

router.use('/machines', machinesRouters)
router.use('/machines/:machineId/logs', machineMaintenanceLogsRouters)

router.get('/health-check', (_, response) => {
    return response.json({ message: 'Hello world' })
})

export default router