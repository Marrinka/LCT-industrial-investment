import express from "express";
import { getAllIndustries } from "../controllers/industriesController.js";

const routerIndustries = express.Router();

routerIndustries.get("/", getAllIndustries);

export { routerIndustries };
