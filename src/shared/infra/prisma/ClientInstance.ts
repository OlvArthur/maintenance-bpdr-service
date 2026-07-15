import { PrismaPg } from '@prisma/adapter-pg'

import { PrismaClient } from '../../../../prisma/client'


export type Context = {
  prisma: PrismaClient
}

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL || 'prisma+postgres://localhost:51213/maintenance-bpdr-service',
})

const prisma = new PrismaClient({
  adapter
})

export { prisma }