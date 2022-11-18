import { User } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { IUserRepository } from "../repositories/user.repository";

export class PrismaUserRepository implements IUserRepository {
    private repository = prisma.user


    async create(data: User): Promise<void> {
        await this.repository.create({ data })
    }
}