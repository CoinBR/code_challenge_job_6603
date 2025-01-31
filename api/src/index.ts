import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import db from './db';
import cors from 'cors';
import codeChallenge from './code_challenge';

dotenvExpand.expand(
  dotenv.config()
)
const ENV = process.env as { API_PORT: string, API_URL: string };
if (!ENV || !ENV.API_PORT || !ENV.API_URL) {
  throw new Error("Unable to load environment variables");
}

// ---------------------
const instructions = `
Server is running on ${ENV.API_URL}

TO RUN TESTS:
  cd api
  npm run test

USAGE:
  curl -X GET ${ENV.API_URL}/${codeChallenge.baseEndpoint}
  curl -X POST ${ENV.API_URL}/${codeChallenge.baseEndpoint} -H "Content-Type: application/json" -d '{"name": "Bob"}'
`;
// ---------------------

const app: express.Express = express();
app.use(express.json()); // Enable JSON body parsing
app.use(cors()); // Allow all origins

app.use(`/${codeChallenge.baseEndpoint}`, codeChallenge.router);

app.get('/', (req: Request, res: Response) => {
  res.send(`<pre>${instructions}</pre>`)
});


// Start the server
const server = app.listen(parseInt(ENV.API_PORT), () => {
  console.log("\n\n\n")
  console.log(instructions)
});


