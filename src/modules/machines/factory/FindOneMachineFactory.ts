import { FindOneMachineController } from "@modules/machines/infra/express/controllers/FindOneMachineController"
import { FindMachineByIdService } from "@modules/machines/services/FindMachineByIdService"
import { MachinesRepository } from "../infra/prisma/repositories/MachinesRepository"

export const findOneMachineFactory = () => {
    const repository = new MachinesRepository()
    const service = new FindMachineByIdService(repository)
    return new FindOneMachineController(service)
} 