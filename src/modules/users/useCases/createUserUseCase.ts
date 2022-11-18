import { User } from "@prisma/client";
import { AppError } from "../../../errors/AppError";
import { prisma } from "../../../prisma/client";
import { CreateAccountController } from "../../account/http/controllers/account.controller";
import { ICreateUserDTO } from "../application/dto/create-user.DTO";

export class CreateUserUseCase {
    async execute({ username, password }: ICreateUserDTO): Promise<User> {
        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                username
            }
        })
        if (userAlreadyExists) {
            throw new AppError("User already exist!");
        }

        const user = await prisma.user.create({
            data: {
                username,
                password,
                account: {},
            }
        })

        return user;
    }
}