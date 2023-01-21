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
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pengzhen@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};
