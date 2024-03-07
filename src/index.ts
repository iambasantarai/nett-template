import express, { Application } from 'express';
import { port } from './utils/env.util';
import { AppDataSource } from './config/data-source';
import router from './routes';
import { logger } from './utils/log.util';

const app: Application = express();

app.use('/api', router);
AppDataSource.initialize()
  .then(() => {
    app.use(express.json());

    app.use('/api', router);

    console.log('=== uwu ===');
    logger.info('DATABASE CONNECTION ESTABLISHED!', 'modulename');
    console.log('=== uwu ===');

    app.listen(port, (): void => {
      logger.info(`Listening on ${port}`);
      logger.info(`http://localhost:${port}`);
    });
  })
  .catch((error) => {
    logger.error(error.message);
  });
