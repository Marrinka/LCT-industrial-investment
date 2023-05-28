import express from "express";
import { getAccountings } from "../controllers/accountingsController.js";

const routerAccountings = express.Router();

routerAccountings.get("/:form", getAccountings);

export { routerAccountings };
