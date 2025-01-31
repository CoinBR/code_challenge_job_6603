import { Router, Request, Response } from 'express';
import db from './db';

const router = Router();
const baseEndpoint = "v1/persons"

// --------------

router.post('/', (req: Request, res: Response) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'name is required' });
  }

  const newPerson = {
    id: db.generateId(),
    name,
  };

  db.collections.person.push(newPerson);
  res.status(201).json(newPerson);
});

router.get('/', (req: Request, res: Response) => {
  res.json(db.collections.person);
});


// --------------

export default {
  router, baseEndpoint
}
