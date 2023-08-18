import express from "express";
import {
  getContacts,
} from "../controllers/contactsByQuantity.js";

const router = express.Router();

router.get("/contactsByQuantity", getContacts);

export default router;
