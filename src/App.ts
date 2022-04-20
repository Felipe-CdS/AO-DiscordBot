import dotenv	from "dotenv";
import express, { Request, Response, NextFunction } from "express";
import { router } from "./routes";

import { VerifyDiscordRequest } from "./utils";

dotenv.config(); // Env vars setup

const app = express();

if(process.env.PUBLIC_KEY){
	app.use(express.json({ verify: VerifyDiscordRequest(process.env.PUBLIC_KEY) }));
	console.log("> public_key verified!");
}

app.use(router);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error) {
        return response.status(400).json({ error: err.message });
    }

    return response.status(500).json({ 
        status: "error",
        message: "Interal Server Error"
    });
});
	

app.listen(process.env.PORT || 3000, () => { console.log("> Server Up!") });