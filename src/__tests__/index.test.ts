import request from 'supertest';
import app from '../app';

const API_PREFIX = '/api';

describe('GET /heartbeat', () => {
  describe('test if the application is up and running', () => {
    test('should respond with 200 status code', async () => {
      const response = await request(app).get(API_PREFIX + '/heartbeat');

      expect(response.statusCode).toEqual(200);
    });

    test('should specify json in the content type header', async () => {
      const response = await request(app).get(API_PREFIX + '/heartbeat');

      expect(response.headers['content-type']).toEqual(
        expect.stringContaining('json'),
      );
    });
  });
});
