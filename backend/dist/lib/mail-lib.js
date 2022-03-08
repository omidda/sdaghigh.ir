"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const OperationInfo_1 = require("./class/OperationInfo");
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'traderview.ir@gmail.com',
        pass: 'isbn6767'
    }
});
var mailOptions = {
    from: 'traderview.ir@gmail.com',
    to: 'sajad.daghigh@gmail.com',
    subject: 'Email from sdaghigh.ir',
    text: 'That was easy!'
};
const sendEmail = (message) => {
    mailOptions.text = `${message.title} \n ${message.message} \n ${message.email}`;
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return new OperationInfo_1.default().makeError().setMessage(error);
        }
        else {
            return new OperationInfo_1.default()
                .makeSuccess().setMessage("Email sent!");
        }
    });
    return new OperationInfo_1.default().makeError();
};
exports.sendEmail = sendEmail;
