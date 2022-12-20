var express = require('express');
var router = express.Router();
var model_user = require('../db/models_sqlites/user');

// var multer = require('multer');
// var upload = multer({dest: './uploads'});

var bodyParser = require("body-parser");
router.use(bodyParser.json());
const { body, validationResult } = require('express-validator');
//POST request to register
router.post('/register',[
    body('name').notEmpty(),
    body('email').isEmail(),
    body('password').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i"),
    ],function(req, res, next) {
    console.log(req.body,typeof(req.body));
    // const body = JSON.parse(req.body);
    // console.log(body,typeof(body));
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try{
        newUser = {'name':req.body['name'],'email':req.body['email'],'password':req.body['password']};
        // console.log(newUser);
        model_user.createUser(newUser)
        .then(
            msg =>{
                res.json({
                    'status':'ok',
                    'message':msg,
                });
            }
        )
        .catch(err=>{
            res.json({
                'status':'fail',
                'message':err,
            });
        })
    }
    catch(err)
    {
        console.log(err);
        return res.json({
            'status':'fail',
            'message':'unknown fail',
        });
    }
    
});

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
    try{
        // console.log(newUser);
        model_user.validateUser(req.body).then(
            msg =>{
                res.json({
                    'status':'ok',
                    'message':msg,
                });
            }
        )
        .catch(err=>{
            res.json({
                'status':'fail',
                'message':err,
            });
        })
    }
    catch(err)
    {
        console.log(err);
        return res.json({
            'status':'fail',
            'message':'unknown fail',
        });
    }
});

module.exports = router;