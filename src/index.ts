import express , { Request, Response} from 'express';
import dotenv from "dotenv";
dotenv.config();
import { useRoutes } from './routes';
import bodyParser from 'body-parser';



//porta pra rodar a aplicação
const PORT = process.env.PORT || 8091;

const app = express();
app.use(bodyParser.json());
useRoutes(app);


app.get('/', (_req: Request, res: Response) => {
    res.json({
        msg: 'ok'
    })
})

app.listen(PORT, () => console.log("Servidor rodando na porta," + PORT))