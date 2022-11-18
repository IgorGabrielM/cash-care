import {NextFunction, Request, Response} from "express";
import {createUserFactory} from "../factories/create-user.factory";

export class CreateUserController {
    async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const useCase = createUserFactory();
            const data = req.body;

            res.status(201).json(await useCase.execute(data))
        }catch (err){
            next(err)
        }
    }
}