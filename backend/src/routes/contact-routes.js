import { Router } from "express";
import { sendEmail } from "../lib/mail-lib";

const router = new Router();

router.get("/get", (req, res) => {

    res.json({
        status: "success"
    })
});

router.post("/send", (req, res) => {

    console.log("Contact recieved")
    sendEmail();

    res.json({
        status: "success"
    })
});

export default router;