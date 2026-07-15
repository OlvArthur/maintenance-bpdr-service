import { MachinesRepository } from '@modules/machines/infra/prisma/repositories/MachinesRepository'
import { CreateMachineService } from '@modules/machines/services/CreateMachineService'
import { CreateMachineController } from '@modules/machines/infra/express/controllers/CreateMachineController'

export const createMachineFactory = () => {
  const repository = new MachinesRepository()
  const service = new CreateMachineService(repository)
  return new CreateMachineController(service)
}
