require("dotenv").config();
const nodemailer = require("nodemailer");
const pug = require("pug");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

function sendEmail(to, subject, template, data) {
  const mailOptions = {
    from: "edaeylulgunay2@gmail.com",
    to: to,
    subject: subject,
    html: pug.renderFile(__dirname + "/views/" + template + ".pug", data),
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

// projede bir route'da kullanabiliriz
sendEmail("trhalilbey@gmail.com", "Dynamic Test Email", "codeMessage", {
  accessCode: "12345",
});
