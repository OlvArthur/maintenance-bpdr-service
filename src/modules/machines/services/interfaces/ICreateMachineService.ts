import { MachineEntity } from "@modules/machines/entities/Machine"

export interface ICreateMachineRequest {
  name: string
  type: string
  location: string
  serialNumber: string
}

export interface ICreateMachineService {
  execute(data: ICreateMachineRequest): Promise<MachineEntity>
}
