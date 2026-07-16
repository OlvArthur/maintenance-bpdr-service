import { PartEntity } from "../entities/Part";
import { IListPartsRepository } from "../repositories";
import { IListPartsService } from "./interfaces/IListPartsService";

export class ListPartsService implements IListPartsService {
    constructor(private partsRepository: IListPartsRepository) {}

    async execute(): Promise<PartEntity[]> {
        const parts = await this.partsRepository.get()

        return parts
    }
}