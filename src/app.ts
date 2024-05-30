import express, { Express, Request, Response } from 'express';
import router from './routes';
import { generateSwaggerDocs } from './config/swagger';
import path from 'path';

const app: Express = express();

app.use(express.json());
generateSwaggerDocs(app);

app.get('/', (_req: Request, res: Response) => {
  res.sendFile(path.join(process.cwd(), 'index.html'));
});

app.use('/api', router);

export default app;
