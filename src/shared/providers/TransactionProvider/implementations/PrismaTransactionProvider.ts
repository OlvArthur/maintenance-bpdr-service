import { RepositoryContext } from "@shared/interfaces/RepositoryContext";
import { ITransactionProvider } from "../models/ITransactionProvider";
import { prisma } from "@shared/infra/prisma/ClientInstance";

export class PrismaTransactionProvider implements ITransactionProvider<any> {
    async run<T>(work: (context: RepositoryContext<any>) => Promise<T>): Promise<T> {
        const transaction = prisma.$transaction(tx => work({ client: tx }))

        return transaction
    }
}