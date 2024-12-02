import express from "express";
import cors from "cors"
import { connectDb } from "./config/db.js";
import { route } from "./routes/userRoutes.js";
const app = express();
const port = 3000;


app.use(cors())
app.use(express.json())

app.use("/api/user", route)


connectDb();


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
