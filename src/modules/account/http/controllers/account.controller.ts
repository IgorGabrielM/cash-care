import { Request, Response } from "express";
import { CreateAccountUseCase } from "../../useCases/createAccountUseCase";

export class CreateAccountController {
    async handle(req: Request, res: Response) {
        const createAccountUseCase = new CreateAccountUseCase();

        const result = await createAccountUseCase.execute()

        return res.status(201).json(result);
    }


}