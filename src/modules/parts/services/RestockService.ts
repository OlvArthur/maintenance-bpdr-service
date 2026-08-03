import { AppError } from "@shared/errors";
import { IUpdatePartStockRepository } from "../repositories";
import { IRestockService } from "./interfaces/IRestockService";

export class RestockService implements IRestockService {
    constructor(private partsRepository: IUpdatePartStockRepository) {}

    async execute(partId: number, quantityToAdd: number): Promise<void> {
        if(!partId) throw new AppError('Restock service: Missing part Id')
        if(!quantityToAdd) throw new AppError('Restock service: Missing quantity to add')

        await this.partsRepository.restock(partId, quantityToAdd)
    }
}