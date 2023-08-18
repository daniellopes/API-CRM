import express from "express";
import {
  getUser,
  getUsers,
  updateUser,
  deleteUser,
  createUser
} from "../controllers/users.js";

const router = express.Router();

router.get("/user/:id", getUser);
router.get("/users", getUsers);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
router.post("/user", createUser);

export default router;
