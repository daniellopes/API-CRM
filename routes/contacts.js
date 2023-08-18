import express from "express";
import {
  getContact,
  getContacts,
  updateContact,
  deleteContact,
  createContact
} from "../controllers/contacts.js";

const router = express.Router();

router.get("/contact/:id", getContact);
router.get("/contacts", getContacts);
router.put("/contact/:id", updateContact);
router.delete("/contact/:id", deleteContact);
router.post("/contact", createContact);

export default router;
