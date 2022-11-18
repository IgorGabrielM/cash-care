import { Router } from "express";
import { accountRoutes } from "./account.routes";
import { userRoutes } from "./user.routes";

const routes = Router()

routes.use('/users', userRoutes);

routes.use('/account', accountRoutes);

export { routes };