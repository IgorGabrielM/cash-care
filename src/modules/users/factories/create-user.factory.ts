import { BcryptEncoderProvider } from "../../../enconder/bcrypt-encoder.provider";
import { PrismaUserRepository } from "../prisma/prisma-user.repository";
import { CreateUserUseCase } from "../useCases/createUserUseCase";

export function createUserFactory(): CreateUserUseCase {
    const repository = new PrismaUserRepository();
    const enconderProvider = new BcryptEncoderProvider();

    return new CreateUserUseCase(repository, enconderProvider)
}