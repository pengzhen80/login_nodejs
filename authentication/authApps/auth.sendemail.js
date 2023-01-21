var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pengzhenguo2021@gmail.com',
    pass: 'mima1339'
  }
});

var mailOptions = {
  from: 'pengzhenguo2021@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  html: '<p>Click <a href="http://localhost:3000/signup/emailverify/' + hashid + '">here</a> to verify your email</p>'
};

module.exports.sendMail = function (email,html) {
    mailOptions.to = email;
    mailOptions.html = html;
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}