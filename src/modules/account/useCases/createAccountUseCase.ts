import { prisma } from "../../../prisma/client";
import { ICreateAccount } from "../application/dto/create-account.DTO";

export class CreateAccountUseCase {
    async execute() {
        const account = await prisma.account.create({
            data: {
                balance: 100
            }
        })
        return account;
    }
}