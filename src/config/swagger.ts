import { Express, Request, Response } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

const options = {
  failOnErrors: true,
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'NETT template',
      version: '1.0.0',
    },
  },
  apis: ['./src/routes/*.ts'],
};

const openAPISpecification = swaggerJsdoc(options);

export const generateSwaggerDocs = async (app: Express) => {
  app.use(
    '/docs/explorer',
    swaggerUI.serve,
    swaggerUI.setup(openAPISpecification),
  );
  app.get('/docs/openapi.json', (_req: Request, res: Response) => {
    res.setHeader('Content-type', 'application/json');
    res.send(openAPISpecification);
  });
};
