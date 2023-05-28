import express from "express";
import { getAllPatents } from "../controllers/patentsController.js";

const routerPatents = express.Router();

routerPatents.get("/", getAllPatents);

export { routerPatents };
