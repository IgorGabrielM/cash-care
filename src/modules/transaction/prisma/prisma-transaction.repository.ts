import {ITransactionRepository} from "../repositories/transaction.repository";
import {prisma} from "../../../prisma/client";
import {Transaction} from "@prisma/client";

export class PrismaTransactionRepository implements ITransactionRepository{
    private repository = prisma.transaction

    async create(data: Transaction): Promise<void>{
        await this.repository.create({ data })
    }
}