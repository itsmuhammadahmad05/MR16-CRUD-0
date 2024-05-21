import "dotenv/config";

import express from "express";
import routes from "./router/routes.js";
import { connectDB } from "./db/config.js";
import syncDB from "./db/init.js";

const app = express();

app.use(express.json());
app.use(routes);

connectDB();
syncDB();


// server start
app.listen(3000,()=>{
    console.log("Server Started at Port:3000")
})