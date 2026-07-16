import { PartEntity } from "@modules/parts/entities/Part";
import { IFindOnePartRepository, IUpdatePartStockRepository } from "@modules/parts/repositories";
import { PrismaContext, prisma as prismaClient } from "@shared/infra/prisma/ClientInstance";

export class PartsRepository implements IFindOnePartRepository, IUpdatePartStockRepository {
    prismaContext: PrismaContext

    constructor(ctx?: PrismaContext) {
        this.prismaContext = ctx ?? { client: prismaClient }
    }

    async findById(id: number): Promise<PartEntity | null> {
        const { client: prisma } = this.prismaContext

        const foundPart = await prisma.part.findUnique({
            where: {
                id
            }
        })

        return foundPart
    }

    async decrementStock(partId: number, quantityUsed: number): Promise<void> {
        const { client: prisma } = this.prismaContext
        
        await prisma.part.update({
            where: {
                id: partId
            },
            data: {
                quantityOnHand: {
                    decrement: quantityUsed
                }
            }
        })
    }
}