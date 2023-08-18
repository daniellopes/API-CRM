import express from "express";
import {
  getContract,
  getContracts,
  updateContract,
  deleteContract,
  createContract
} from "../controllers/contract.js";

const router = express.Router();

router.get("/contract/:id", getContract);
router.get("/contracts", getContracts);
router.put("/contract/:id", updateContract);
router.delete("/contract/:id", deleteContract);
router.post("/contract", createContract);

export default router;
