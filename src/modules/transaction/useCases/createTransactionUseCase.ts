import {Account} from "@prisma/client";
import {prisma} from "../../../prisma/client";
import {ITransactionRepository} from "../repositories/transaction.repository";

export class CreateTransactionUseCase{

    constructor(
        private transactionRepository: ITransactionRepository
    ) {}

    async execute({...data}): Promise<Account>{
        const debitedAccount = data.debitedAccount
        const creditedAccount = data.creditedAccount
        const value = data.value

        debitedAccount.balance - value
        creditedAccount.balance + value

        const transaction = await prisma.transaction.create({
            data: {
                creditedAccount,
                debitedAccount,
                value,
            }
        })
        return transaction;
    }
}