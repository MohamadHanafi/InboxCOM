import express from "express";
import {
  createMessage,
  getMessage,
  getMessages,
} from "../controllers/messageController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, createMessage);

router.get("/:user_id", protect, getMessages);

router.get("/:user_id/:message_id", protect, getMessage);

export default router;
