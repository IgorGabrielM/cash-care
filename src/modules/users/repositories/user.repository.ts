import { User } from "@prisma/client";

export interface IUserRepository {
    create(data: User): Promise<void>;
}