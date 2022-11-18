import { Transaction } from "@prisma/client";

export interface ITransactionRepository {
    create(data: Transaction): Promise<void>
}