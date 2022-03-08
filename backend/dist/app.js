"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const logger_lib_1 = require("./lib/logger-lib");
const contact_routes_1 = require("./routes/contact-routes");
const app = express();
app.use(bodyParser.json());
app.use(logger_lib_1.logger);
app.get("/", (req, res) => {
    res.json({
        "Title": "Sdaghigh.ir web REST APIs.",
        "Version": "1.0"
    });
});
// app.use(express.static("./client"));
app.use("/contact", contact_routes_1.default);
exports.default = app;
