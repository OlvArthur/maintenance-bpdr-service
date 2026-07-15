import { MachineEntity } from "@modules/machines/entities/Machine"

export interface IFindOneMachineRepository {
  findBySerialNumber(serialNumber: string): Promise<MachineEntity | null>
  findById(id: number): Promise<MachineEntity | null>
  findByQrCode(qrCode: string): Promise<MachineEntity | null>
}
