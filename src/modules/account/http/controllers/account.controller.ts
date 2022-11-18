import { Request, Response } from "express";
import { CreateAccountUseCase } from "../../useCases/createAccountUseCase";

export class CreateAccountController {
    async handle(req: Request, res: Response) {
        const { balance } = req.body

        const createAccountUseCase = new CreateAccountUseCase();

        const result = await createAccountUseCase.execute({ balance })

        return res.status(201).json(result);
    }


}