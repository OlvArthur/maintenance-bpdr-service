import { AppError } from '@shared/errors'
import { PartEntity } from '@modules/parts/entities/Part'
import { ICreatePartRepository, ICreatePartRequestDTO, IFindOnePartRepository } from '../repositories'
import { ICreatePartService } from './interfaces/ICreatePartService'
import { StatusCode } from '@shared/commons'

export class CreatePartService implements ICreatePartService {
    constructor(private partsRepository: ICreatePartRepository & IFindOnePartRepository) {}

    async execute({ location, minThreshold, name, quantityOnHand, sku, unit }: ICreatePartRequestDTO): Promise<PartEntity> {
        if(!location) throw new AppError('Create part service: Missing location')
        if(!name) throw new AppError('Create part service: Missing name')
        if(!sku) throw new AppError('Create part service: Missing sku')
        if(!unit) throw new AppError('Create part service: Missing unit')

        if(typeof minThreshold !== 'number') throw new AppError('Create part service: Missing minThreshold')
        if(typeof quantityOnHand !== 'number') throw new AppError('Create part service: Missing quantityOnHand')

        const partAlreadyExists = await this.partsRepository.findBySku(sku)

        if(partAlreadyExists) throw new AppError('Create part service: A part with this sku already exists', StatusCode.CONFLICT)

        const createdPart = await this.partsRepository.create({
            location,
            minThreshold,
            name,
            quantityOnHand,
            sku,
            unit
        })

        return createdPart
    }
}