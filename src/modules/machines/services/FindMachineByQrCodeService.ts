import { UUID } from "node:crypto"

import { IFindMachineByQrCodeService } from "@modules/machines/services/interfaces/IFindMachineByQrCodeService"
import { IFindOneMachineRepository } from "@modules/machines/repositories"
import { MachineEntity } from "@modules/machines/entities/Machine"
import { AppError } from "@shared/errors"
import { StatusCode } from "@shared/commons"

export class FindMachineByQrCodeService implements IFindMachineByQrCodeService {
    constructor(private machinesRepository: IFindOneMachineRepository) {}

    async execute(qrCode: UUID): Promise<MachineEntity> {
        if(!qrCode) throw new AppError('Find Machine by Qr Code Service: Missing Qr Code')

        const foundMachine = await this.machinesRepository.findByQrCode(qrCode)

        if(!foundMachine) throw new AppError("Find Machine by Qr Code Service: Qr code not recognized", StatusCode.NOT_FOUND)

        return foundMachine
    }
}