export interface IUpdatePartStockRepository {
    decrementStock(partId: number, quantityUsed: number): Promise<void>
}