import dotenv from "dotenv"
import { Client } from "discord.js"

import ready from "./Listeners/Ready";
import InteractionCreate from "./Listeners/InteractionCreate";

dotenv.config();	// set environment variables

const client = new Client({ intents: [] });

ready(client);
InteractionCreate(client);

client.login(process.env.DISCORD_TOKEN);
