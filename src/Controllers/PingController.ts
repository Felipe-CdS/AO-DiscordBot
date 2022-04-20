import { Request, Response } from "express";
import { InteractionType, InteractionResponseType } from "discord-interactions";

class PingController{

	async handle(req: Request, res: Response){
		const { type, data, id } = req.body;
	  
		if (type === InteractionType.PING){
			return res.json({ type: InteractionResponseType.PONG });
		}

		if(type === InteractionType.APPLICATION_COMMAND){
			const { name } = data;	
			if (name === 'test') {
				return res.send({
				type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
				data: { content: 'hello World!' },
				});
			}
		}
	}
}

export { PingController };