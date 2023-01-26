var express = require('express');
var router = express.Router();
var modelLocalPostgres = require('../../../db/models.local.postgresql/auth.user');

//POST request to register
router.post('/email', function (req, res, next) {
    const errors = [];
    console.log(typeof(req.body));
    // check content type
    try {
        JSON.parse(req.body);
        // console.log(JSON.parse(req.body));
    } catch (err) {
        console.log('can not parser body');
        res.json({
            'message': 'wrong content type',
        });
    }
    // get body
    const body = JSON.parse(req.body);
    console.log(body,typeof(body));
    
    if (!body['email']) {
        errors.push('No email specified');
    }
    else{
        function isEmail(email) {
            var emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
            if (email !== '' && email.match(emailFormat)) { return true; }
            
            return false;
        }
        if(!isEmail(body['email']))
        {
            errors.push('email format error');
        }
    }
    console.log(body['email']);

    if (!body['password']) {
        errors.push('No password specified');
    }
    else{
        function PasswordCheck(pwd) {
            var padFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
            if (pwd !== '' && pwd.match(padFormat)) { return true; }
            
            return false;
        }
        // if(!body['password'].matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i"))
        // {
        //     errors.push('password format error');
        // }
        if(!PasswordCheck(body['password']))
        {
            errors.push('password format error');
        }
    }
    console.log(body['password']);

    if (errors.length) {
        console.log(errors);
        return res.status(400).json({ 'error': errors.join(',') });
    }

    console.log(body['password']);
    try {
        // let newUser = { 'name': req.body['name'], 'email': req.body['email'], 'password': req.body['password'] };
        // console.log(newUser);
        modelLocalPostgres.checkEmail(body['email'])
            .then(
                resCheckEmail => {
                    modelLocalPostgres.checkEmailAndPassword(body['email'],body['password'])
                    .then(rescheckEmailAndPassword=>{
                        var session = req.session;
                        session['userid']=body['email'];
                        console.log(req.session)
                        res.json({
                            'status': 'success',
                            'userid': rescheckEmailAndPassword,
                        });
                    })
                    .catch(errcheckEmailAndPassword=>{
                        res.json({
                            'status': 'fail',
                            'message': 'password error',
                        });
                    })
                }
            )
            .catch(errCheckEmail => {
                res.json({
                    'status': 'fail',
                    'message': 'no such email',
                });
            })
    }
    catch (err) {
        console.log(err);
        return res.json({
            'status': 'fail',
            'message': 'unknown fail',
        });
    }

});

module.exports = router;