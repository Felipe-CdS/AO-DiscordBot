import 'dotenv/config';
import express from 'express';
import { router } from "./routes";
import { VerifyDiscordRequest } from './utils';

const app = express();

app.use(express.json({ verify: VerifyDiscordRequest }));

app.use(router);

app.listen(3000, () => { console.log('Listening on port 3000') });