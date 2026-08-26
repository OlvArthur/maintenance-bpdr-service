import { prisma } from '@shared/infra/prisma/ClientInstance'
import { randomUUID } from "node:crypto";

async function seed() {
    const qrCode = randomUUID()

    const machine = await prisma.machine.upsert({
        where: { serialNumber: 'PILOT-001' },
        update: {},
        create: {
            qrCode,
            name: 'Pilot Machine',
            type: 'Generic Equipment',
            location: 'Floor A',
            serialNumber: 'PILOT-001',
        }
    })


    console.log(`Machine created with QR Code: /m/${machine.qrCode}`)
    console.log({ machine })
}

seed().catch((e) => {
    console.error(e)
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect()
})