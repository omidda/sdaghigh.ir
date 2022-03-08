import OperationInfo from "./class/OperationInfo";
import Message from "./class/Message";

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

export const sendEmail = (message:Message) : OperationInfo => {

  mailOptions.text = `${message.title} \n ${message.message} \n ${message.email}`;
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return new OperationInfo().makeError().setMessage(error);
    } else {
      return new OperationInfo()
        .makeSuccess().setMessage("Email sent!");
    }
  });

  return new OperationInfo().makeError();
}