import { verifyKey } from 'discord-interactions';
import { Request, Response } from 'express';

export function VerifyDiscordRequest(){
	return(
		function(req: Request, res: Response, buf: any, encoding: any){

		const publicKey = process.env.PUBLIC_KEY				|| "";
		const signature = req.header('x-signature-ed25519')		|| "";
		const timestamp = req.header('x-signature-timestamp')	|| "";
	  
		const isVerified = verifyKey(buf, signature, timestamp, publicKey);
		
		if (!isVerified) {
		  res.status(401);
		  return;
		}
	  }
	);
}