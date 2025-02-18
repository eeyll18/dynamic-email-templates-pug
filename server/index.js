require("dotenv").config();
const nodemailer = require("nodemailer");
const pug = require('pug');

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

const mailOptions = {
  from: "edaeylulgunay2@gmail.com",
  to: "trhalilbey@gmail.com",
  subject: "Test Email",
  html: pug.renderFile(__dirname + '/views/welcomeMessage.pug',{username:"halil"}),
};

transporter.sendMail(mailOptions, function (err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log("Email sent: " + info.response);
  }
});
