import {CreateTransactionUseCase} from "../useCases/createTransactionUseCase";
import {PrismaTransactionRepository} from "../prisma/prisma-transaction.repository";

export function createTransactionFactory(): CreateTransactionUseCase{
    const repository = new PrismaTransactionRepository();

    return new CreateTransactionUseCase(repository);
}