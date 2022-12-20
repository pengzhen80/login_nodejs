var express = require('express');
var router = express.Router();
var model_user = require('../db/models_sqlites/user');

// var multer = require('multer');
// var upload = multer({dest: './uploads'});

var bodyParser = require("body-parser");
router.use(bodyParser.json());
const { body, validationResult } = require('express-validator');
//POST request to register
router.post('/login',[
    body('email').isEmail(),
    body('password').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i"),
    ],function(req, res, next) {
    // console.log(req.body,typeof(req.body));
    // const body = JSON.parse(req.body);
    // console.log(body,typeof(body));
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.json({
        'message':'success',
    });
});

module.exports = router;