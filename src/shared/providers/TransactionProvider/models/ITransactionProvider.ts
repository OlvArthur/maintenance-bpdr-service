import { RepositoryContext } from '@shared/interfaces/RepositoryContext'

export interface ITransactionProvider<TClient = unknown> {
    run<T>(work: (context: RepositoryContext<TClient>) => Promise<T>): Promise<T>
}