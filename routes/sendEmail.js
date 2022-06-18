const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");
const mg = require("nodemailer-mailgun-transport");

router.get('/send-email', (req, res)=>{
  const mailgunAuth = {
    auth:{
      api_key: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN
    }
  }

  const smtpTransport = nodemailer.createTransport(mg(mailgunAuth));
  const mailOption = {
    from:"himanshu.dev7350@gmail.com",
    to: "negih7350@gmail.com",
    subject: "EMAIL SUBJECT LINE",
    html: "<h1>Hello this test email</h1>"
  }
   smtpTransport.sendMail(mailOption, function(error, response){
    if(error){
      return res.status(400).json({msg: error})
    }
  });
  
  res.status(200).json({msg: "email sent success"});

})

module.exports = router;