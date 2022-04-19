import { Request, Response } from "express";
import { InteractionType, InteractionResponseType } from "discord-interactions";

class PingController{

	async handle(req: Request, res: Response){
		const { type } = req.body;
	  
		if (type === InteractionType.PING) 
			return res.send({ type: InteractionResponseType.PONG });
		else
			return res.send(
				{ 
					type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
					data: { content: "Error!" }
				}
			);
	}
}

export { PingController };