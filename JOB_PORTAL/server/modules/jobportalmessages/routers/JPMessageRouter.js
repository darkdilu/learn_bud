import { Router } from "express";
import {
  getMessages,
  sendMessages,
  updateMessageNotification,
} from "../controllers/JPMessageController.js";

const router = Router();

router.get("/", getMessages);
router.post("/send", sendMessages);
router.patch("/notification", updateMessageNotification);

export default router;
