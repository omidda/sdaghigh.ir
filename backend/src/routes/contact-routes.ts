import { Router } from "express";
import { sendEmail } from "../lib/mail-lib";


const router = Router();

router.get("/get", (req, res) => {

    res.json({
        status: "success"
    })
});

router.post("/send", (req, res) => {

    const result = sendEmail(req.body);

    res.json(result);
});

export default router;