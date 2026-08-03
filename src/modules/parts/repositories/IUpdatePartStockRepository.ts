export interface IUpdatePartStockRepository {
    decrementStock(partId: number, quantityUsed: number): Promise<void>
    restock(partId: number, quantityToAdd: number): Promise<void>
}