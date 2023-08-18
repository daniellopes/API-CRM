import express from "express";
import {
  getService,
  getServices,
} from "../controllers/services.js";

const router = express.Router();

router.get("/services", getServices);
router.get("/service/:id", getService);

export default router;
