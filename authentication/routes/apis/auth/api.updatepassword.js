var express = require('express');
const { user } = require('pg/lib/defaults');
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

    if (!body['oldpassword']) {
        errors.push('No oldpassword specified');
    }
    else{
        function PasswordCheck(pwd) {
            var padFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
            if (pwd !== '' && pwd.match(padFormat)) { return true; }
            
            return false;
        }
        if(!PasswordCheck(body['oldpassword']))
        {
            errors.push('oldpassword format error');
        }
    }

    if (!body['newpassword']) {
        errors.push('No newpassword specified');
    }
    else{
        function PasswordCheck(pwd) {
            var padFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
            if (pwd !== '' && pwd.match(padFormat)) { return true; }
            
            return false;
        }
        if(!PasswordCheck(body['newpassword']))
        {
            errors.push('newpassword format error');
        }
    }

    if (errors.length) {
        console.log(errors);
        return res.status(400).json({ 'error': errors.join(',') });
    }

    try {
        modelLocalPostgres.checkEmail(body['email'])
            .then(
                resCheckEmail => {
                    modelLocalPostgres.checkEmailAndPassword(body['email'],body['oldpassword'])
                    .then(userid=>{
                        modelLocalPostgres.updatePassword(userid,body['email'],body['newpassword'])
                        .then(resUpdate=>{
                            res.json({
                                'status': 'success',
                            });
                        })
                        .catch(errUpdate=>{
                            res.json({
                                'status': 'fail',
                            });
                        })
                    })
                    .catch(errcheckEmailAndPassword=>{
                        res.json({
                            'status': 'fail',
                            'message': 'old password error',
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