import { PartEntity } from "../entities/Part";
import { IListPartsRepository } from "../repositories";
import { IFindLowStockService } from "./interfaces/IFindLowStockService";

export class FindLowStockService implements IFindLowStockService {
    constructor(private partsRepository: IListPartsRepository) {}

    async execute(): Promise<PartEntity[]> {
        const allParts = await this.partsRepository.get()

        const lowStockParts = allParts.filter(({ quantityOnHand, minThreshold }) => quantityOnHand <=  minThreshold)

        return lowStockParts
    }
}