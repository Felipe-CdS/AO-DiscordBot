import 'dotenv/config';
import express from 'express';
import { router } from "./routes";
import { VerifyDiscordRequest } from './utils';

const app = express();

app.use(express.json({ verify: VerifyDiscordRequest }));

app.use(router);

app.listen(process.env.PORT || 3000, () => { console.log("Server Up!") });