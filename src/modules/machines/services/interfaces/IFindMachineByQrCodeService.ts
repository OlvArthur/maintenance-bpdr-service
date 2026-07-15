import { UUID } from "node:crypto"

import { MachineEntity } from "@modules/machines/entities/Machine"

export interface IFindMachineByQrCodeService {
    execute(qrCode: UUID): Promise<MachineEntity>
}