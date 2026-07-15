import { FindMachineByQrCodeController } from "@modules/machines/infra/express/controllers/FindMachineByQrCodeController"
import { MachinesRepository } from "@modules/machines/infra/prisma/repositories/MachinesRepository"
import { FindMachineByQrCodeService } from "@modules/machines/services/FindMachineByQrCodeService"

export const findMachineByQrCodeFactory = () => {
    const repository = new MachinesRepository()
    const service = new FindMachineByQrCodeService(repository)
    return new FindMachineByQrCodeController(service)
}