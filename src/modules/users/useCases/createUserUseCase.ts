import { User } from "@prisma/client";
import { IEnconderProvider } from "../../../application/providers/enconder.provider";
import { AppError } from "../../../errors/AppError";
import { prisma } from "../../../prisma/client";
import { CreateAccountController } from "../../account/http/controllers/account.controller";
import { ICreateUserDTO } from "../application/dto/create-user.DTO";
import { IUserRepository } from "../repositories/user.repository";

export class CreateUserUseCase {

    constructor(
        private userRepository: IUserRepository,
        private enconderProvider: IEnconderProvider
    ) { }

    async execute({ username, password }: ICreateUserDTO): Promise<User> {
        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                username
            }
        })
        if (userAlreadyExists) {
            throw new AppError("User already exist!");
        }

        if (username.length < 3) {
            throw new AppError('Username must be more than 3 letters')
        }

        if (
            !/[a-z]/.test(password) ||
            !/[A-Z]/.test(password) ||
            !/\d/.test(password) ||
            !/[0-9]/.test(password) ||
            !/[!@#$%^&*.,\/+{\[\]\-;´`~<>}\\?_=§()|]/.test(password) ||
            password.length < 8
        ) {
            throw new AppError('Invalid password, your password is not secure, make sure that it has a special character, a number, a uppercase letter, lowercase letter');
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