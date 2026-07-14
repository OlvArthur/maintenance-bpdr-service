import { MachineEntity } from "@modules/machines/entities/Machine"

export interface ICreateMachineRequestDTO {
  qrCode: string
  name: string
  type: string
  location: string
  serialNumber: string
}

export interface ICreateMachineRepository {
  create(data: ICreateMachineRequestDTO): Promise<MachineEntity>
}
