import { Account } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { ICreateAccount } from "../application/dto/create-account.DTO";

export class CreateAccountUseCase {
    async execute({ balance }: ICreateAccount): Promise<Account> {
        const account = await prisma.account.create({
            data: {
                balance
            }
        })
        return account;
    }
}