import { FindMachineByIdController } from "@modules/machines/infra/express/controllers/FindMachineByIdController"
import { FindMachineByIdService } from "@modules/machines/services/FindMachineByIdService"
import { MachinesRepository } from "../infra/prisma/repositories/MachinesRepository"

export const findMachineByIdFactory = () => {
    const repository = new MachinesRepository()
    const service = new FindMachineByIdService(repository)
    return new FindMachineByIdController(service)
} 