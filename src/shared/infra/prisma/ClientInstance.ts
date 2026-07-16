import { PrismaPg } from '@prisma/adapter-pg'

import { PrismaClient, Prisma } from '../../../../prisma/client'
import { RepositoryContext } from '@shared/interfaces/RepositoryContext'


// export type PrismaContext = {
//   prisma: PrismaClient
// }
export type PrismaContext = RepositoryContext<PrismaClient | Prisma.TransactionClient>

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL || 'prisma+postgres://localhost:51213/maintenance-bpdr-service',
})

const prisma = new PrismaClient({
  adapter
})

export { prisma }