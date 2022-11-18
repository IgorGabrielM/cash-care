import {NextFunction, Request, Response} from "express";
import {createTransactionFactory} from "../transaction/create-transaction.factory";

export class TransactionController{
    async create(req: Request, res: Response, next: NextFunction){
        try {
            const useCase = createTransactionFactory();
            const data = req.body;

            res.status(201).json(await useCase.execute(data))
        }catch (err){
            next(err)
        }
    }
}