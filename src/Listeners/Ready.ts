import { Client } from "discord.js"
import { CommandsCollection } from "../CommandsCollection"

export default (client: Client): void => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }

		await client.application.commands.set(CommandsCollection);
        console.log(`${client.user.username} is online`);
    });
};