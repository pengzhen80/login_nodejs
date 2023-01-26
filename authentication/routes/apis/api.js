const express = require('express');
const router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.text({type:'*/*'}));

const apiLogin = require("./auth/api.login");
const apiLogout = require("./auth/api.logout");
const apiRegister = require("./auth/api.register");
const apiUpdatePwd = require("./auth/api.updatepassword");

router.use('/login', apiLogin);
router.use('/logout', apiLogout);
router.use('/register', apiRegister);
router.use('/updatepwd', apiUpdatePwd);

module.exports = router;
