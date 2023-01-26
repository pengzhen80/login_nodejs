var express = require('express');
var router = express.Router();

//POST request to log out 
router.post('/', function (req, res) {
    console.log(req.session);
    console.log('Cookies: ', req.cookies)
    if(req.session['userid']){
        req.session.destroy(funCB);
        function funCB()
        {
            res.json({
                status:'ok'
            });
        }
    }else{
        res.json({
            status:'fail',
            msg:'please login first'
        });
    }
});

module.exports = router;