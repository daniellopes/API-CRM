import express from "express";
import { getClients, getClient, updateClient, deleteClient, createClient } from "../controllers/clients.js";

const router = express.Router();

router.get("/clients", getClients);
router.get("/client/:id", getClient);
router.put("/client/:id", updateClient);
router.delete("/client/:id", deleteClient);
router.post("/client", createClient);

export default router;
