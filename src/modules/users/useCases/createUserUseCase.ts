import { User } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { ICreateUserDTO } from "../application/dto/create-user.DTO";

export class CreateUserUseCase {
    async execute({ username, password }: ICreateUserDTO): Promise<User> {
        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                username
            }
        })
        if (userAlreadyExists) {
            //error
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