import { Router } from 'express'

import { machinesRouters } from '@modules/machines/infra/express/routes/machines.routes'

const router = Router()

router.use('/machines', machinesRouters)

router.get('/health-check', (_, response) => {
    return response.json({ message: 'Hello world' })
})

export default router