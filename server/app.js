import express from "express";
import cors from 'cors';

import { routerIndustries } from "./routes/getIndustries.js";

export const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/industries", routerIndustries);

app.use((err, req, res, next) => {
	res.status(500).json({ error: "Internal server error" });
});

app.listen(3001, () => {
	console.log("Server is running on port 3001");
});
