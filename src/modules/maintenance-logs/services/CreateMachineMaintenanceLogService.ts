import { ICreateMachineMaintenanceLogService } from '@modules/maintenance-logs/services/interfaces/ICreateMachineMaintenanceLogService'
import { ICreateMachineMaintenanceLogRepository, ICreateMachineMaintenanceLogRequestDTO } from '@modules/maintenance-logs/repositories/ICreateMachineMaintenanceLogRepository'
import { MaintenanceLogEntity } from '@modules/maintenance-logs/entities/MaintenanceLog'
import { AppError } from '@shared/errors'
import { ITransactionProvider } from '@shared/providers/TransactionProvider/models/ITransactionProvider'
import { RepositoryContext } from '@shared/interfaces/RepositoryContext'
import { IFindOnePartRepository, IUpdatePartStockRepository } from '@modules/parts/repositories'
import { StatusCode } from '@shared/commons'

export class CreateMachineMaintenanceLogService<TClient> implements ICreateMachineMaintenanceLogService {
    constructor(
        private transactionProvider: ITransactionProvider<TClient>,
        private makeMaintenanceLogsRepository: (context: RepositoryContext<TClient>) => ICreateMachineMaintenanceLogRepository,
        private makePartsRepository: (context: RepositoryContext<TClient>) => IFindOnePartRepository & IUpdatePartStockRepository
    ) {}

    async execute({ description, machineId, partsUsed, technicianId, type }: ICreateMachineMaintenanceLogRequestDTO): Promise<MaintenanceLogEntity> {
        if(!description) throw new AppError('Create machine maintenance log service: Missing log description')
        if(!machineId) throw new AppError('Create machine maintenance log service: Missing log machineId')
        if(!partsUsed) throw new AppError('Create machine maintenance log service: Missing log partsUsed')
        if(!technicianId) throw new AppError('Create machine maintenance log service: Missing log technicianId')
        if(!type) throw new AppError('Create machine maintenance log service: Missing log type')


        const logCreationByTransaction = () => this.transactionProvider.run(async (context) => {
            const maintenanceLogsRepository = this.makeMaintenanceLogsRepository(context)
            const partsRepository = this.makePartsRepository(context)

            for (const usage of partsUsed ?? []) {
                const part = await partsRepository.findById(usage.partId)
                if(!part || part.quantityOnHand < usage.quantityUsed) {
                    throw new AppError(`Insufficient stock for part ${usage.partId}`, StatusCode.CONFLICT)
                }
            }

            const createdLog = await maintenanceLogsRepository.createMachineMaintenanceLog({
                description,
                machineId,
                partsUsed,
                technicianId,
                type
            })

            for(const usage of partsUsed ?? []) {
                await partsRepository.decrementStock(usage.partId, usage.quantityUsed)
            }

            return createdLog
        })


        const createdLog = logCreationByTransaction()

        return createdLog

    }
}