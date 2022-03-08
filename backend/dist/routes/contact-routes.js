"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mail_lib_1 = require("../lib/mail-lib");
const router = (0, express_1.Router)();
router.get("/get", (req, res) => {
    res.json({
        status: "success"
    });
});
router.post("/send", (req, res) => {
    const result = (0, mail_lib_1.sendEmail)(req.body);
    res.json(result);
});
exports.default = router;
