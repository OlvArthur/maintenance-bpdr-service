import { MachineEntity } from "@modules/machines/entities/Machine"

export interface IFindOneMachineRepository {
  findBySerialNumber(serialNumber: string): Promise<MachineEntity | null>
}
