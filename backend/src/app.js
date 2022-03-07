import express from "express";
import bodyParser from "body-parser";
import { logger } from "./lib/logget-lib";
import contactRoutes from "./routes/contact-routes";

const app = express();

app.use(bodyParser.json());
app.use(logger);
app.get("/", (req, res) => {
    res.json({
        "Title": "Sdaghigh.ir web REST APIs.",
        "Version" : "1.0"
    })
 })
// app.use(express.static("./client"));
app.use("/contact", contactRoutes);



export default app;