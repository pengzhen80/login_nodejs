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
    
    if (!body['name']) {
        errors.push('No name specified');
    }
    else{
        if(body['name'].length === 0)
        {
            errors.push('name is empty');
        }
    }

    if (!body['email']) {
        errors.push('No email specified');
    }
    else{
        if(!body['email'].isEmail())
        {
            errors.push('email format error');
        }
    }
    console.log(body['email']);

    if (!body['password']) {
        errors.push('No password specified');
    }
    else{
        if(!body['password'].matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i"))
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
        newUser = { 'name': req.body['name'], 'email': req.body['email'], 'password': req.body['password'] };
        // console.log(newUser);
        modelLocalPostgres.createUser(newUser)
            .then(
                msg => {
                    res.json({
                        'status': 'ok',
                        'message': msg,
                    });
                }
            )
            .catch(err => {
                res.json({
                    'status': 'fail',
                    'message': err,
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