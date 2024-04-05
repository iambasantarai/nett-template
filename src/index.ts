import { port } from './utils/env.util';
import { AppDataSource } from './config/data-source';
import { logger } from './utils/log.util';
import app from './app';

AppDataSource.initialize()
  .then(() => {
    console.log('=== uwu ===');
    logger.info('DATABASE CONNECTION ESTABLISHED!', 'modulename');
    console.log('=== uwu ===');

    app.listen(port, (): void => {
      logger.info(`Listening on ${port}`);
      logger.info(`http://localhost:${port}`);
    });
  })
  .catch((error: any) => {
    logger.error(error.message);
  });
