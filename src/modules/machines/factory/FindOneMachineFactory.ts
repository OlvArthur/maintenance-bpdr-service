import { FindOneMachineController } from "@modules/machines/infra/express/controllers/FindOneMachineController"
import { FindOneMachineService } from "@modules/machines/services/FindOneMachineService"
import { MachinesRepository } from "../infra/prisma/repositories/MachinesRepository"

export const findOneMachineFactory = () => {
    const repository = new MachinesRepository()
    const service = new FindOneMachineService(repository)
    return new FindOneMachineController(service)
} 