import { Router } from "express";
import { CreateAccountController } from "../modules/account/http/controllers/account.controller";

const createAccountController = new CreateAccountController();

const accountRoutes = Router();

accountRoutes.post('/', createAccountController.handle);

export { accountRoutes };