export interface IRestockService {
    execute(partId: number, quantityToAdd: number): Promise<void>
}