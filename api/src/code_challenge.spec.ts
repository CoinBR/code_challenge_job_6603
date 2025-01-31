import request from 'supertest';
import express, { Express } from 'express';
import codeChallenge from './code_challenge';
import db from './db';

const createApp = (): Express => {
  const app = express();
  app.use(express.json());
  app.use(`/${codeChallenge.baseEndpoint}`, codeChallenge.router);
  return app;
};

describe('code challenge tests', () => {
  let app: Express;

  beforeEach(() => {
    app = createApp();
    db.reset();
  });

  describe('GET /v1/persons', () => {
    it('should return an empty array when no persons exist', async () => {
      const res = await request(app).get('/v1/persons');
      expect(res.status).toBe(200);
      expect(res.body).toEqual([]);
    });

    it('should return all persons stored in the database', async () => {
      db.collections.person.push({ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' });

      const res = await request(app).get('/v1/persons');
      expect(res.status).toBe(200);
      expect(res.body).toEqual([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ]);
    });
  });

  describe('POST /v1/persons', () => {
    it('should add a new person to the database when valid data is provided', async () => {
      const payload = { name: 'Charlie' };
      const res = await request(app).post('/v1/persons').send(payload);

      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty('id');
      expect(res.body.name).toBe(payload.name);

      expect(db.collections.person).toHaveLength(1);
      expect(db.collections.person[0]).toEqual(res.body);
    });

    it('should return 400 if the name is missing in the request body', async () => {
      const payload = {};
      const res = await request(app).post('/v1/persons').send(payload);

      expect(res.status).toBe(400);
      expect(res.body).toEqual({ error: 'name is required' });

      expect(db.collections.person).toHaveLength(0);
    });
  });
});

