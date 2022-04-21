import { BaseCommandInteraction, Client, Interaction } from "discord.js";
import { CommandsCollection } from "../CommandsCollection";

export default (client: Client): void => {
    client.on("interactionCreate", async (interaction: Interaction) => {
		if (!interaction.isCommand() && !interaction.isContextMenu()) return;

		await handleSlashCommand(client, interaction);
    });
};

const handleSlashCommand = async (client: Client, interaction: BaseCommandInteraction): Promise<void> => {
    const slashCommand = CommandsCollection.find(c => c.name === interaction.commandName);
	
    if (!slashCommand) {
        interaction.followUp({ content: "An error has occurred" });
        return;
    }

    await interaction.deferReply();

    slashCommand.run(client, interaction);
}; 