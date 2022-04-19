import axios from "axios";
import { verifyKey } from 'discord-interactions';

export function VerifyDiscordRequest(clientKey: string) {
	return function (req: any, res: any, buf: any, encoding: any) {
	  const signature = req.get('X-Signature-Ed25519');
	  const timestamp = req.get('X-Signature-Timestamp');
  
	  const isValidRequest = verifyKey(buf, signature, timestamp, clientKey);
	  if (!isValidRequest) {
		res.status(401).send('Bad request signature');
		throw new Error('Bad request signature');
	  }
	};
}

export async function DiscordRequest(endpoint: any, options: any) {

	const url = 'https://discord.com/api/v9/' + endpoint;
	if (options.body) options.body = JSON.stringify(options.body);

	const res = await axios({
		method: options.method,
		url,
		data: {"body": options.body },
		headers: 
		{
			Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
			'Content-Type': 'application/json; charset=UTF-8',
		}
	});

	console.log(res);

	// if (!res.ok) {
	// 	const data = await res.json();
	// 	console.log(res.status);
	// 	throw new Error(JSON.stringify(data));
	// }

	return res;

	/*const res = await fetch(url, {
	  headers: {
		Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
		'Content-Type': 'application/json; charset=UTF-8',
	  },
	  ...options
	});
	// throw API errors
	if (!res.ok) {
	  const data = await res.json();
	  console.log(res.status);
	  throw new Error(JSON.stringify(data));
	}*/
}
  