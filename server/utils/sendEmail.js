import nodemailer from 'nodemailer';
import colors from 'colors';
import dotenv from 'dotenv';
dotenv.config();

const sendMessage = ({ to, text, subject }, callback) => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use TLS
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false
    }
  });
  const mailOptions = {
    to,
    from: process.env.SMTP_EMAIL,
    subject,
    text
  };
  transporter.sendMail(mailOptions, callback);
};

export default sendMessage;
