import { Router } from "express";
import { PingController } from "./Controllers/PingController";

const router = Router();

const pingController = new PingController();

router.post("/interactions", pingController.handle );

export { router }