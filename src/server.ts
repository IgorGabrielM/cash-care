import express from 'express';
import { routes } from './modules/users/http/routes';

const app = express();

app.listen(8080, () => console.log('Server is running'))

app.use(express.json());

app.use(routes); 