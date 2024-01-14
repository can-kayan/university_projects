const nodemailer = require('nodemailer');
require('dotenv/config');
const postMail=async(req,res)=>{
// Transporter oluştur
let transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.forwardemail.net",
  port: 465,
  secure: true,
  auth: {
    user: process.env.USERG, 
    pass: process.env.PASS 
  }
});
// Mail seçeneklerini belirt
let mailOptions = {
  from: req.body.from,
  to: process.env.USERG, // Gönderilecek e-posta adresi
  subject: req.body.subject,
  text: req.body.from +'\n'+ req.body.text
};

// E-posta gönderme işlemi
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
    res.status(400).json(error)
  } else {
    console.log('Email gönderildi: ' + info.response);
    res.status(200).json(info.response)
  }
});
}
module.exports={postMail}