const pgClient = require('../clients/local.postgresql');
const { v4: uuidv4 } = require('uuid');
//for password
const md5 = require('md5');
const { rows } = require('pg/lib/defaults');

const model_template ={
    'user_id':'',
    'password':'',
    'last_login':'',
    'is_superuser':'',
    'username':'',
    'first_name':'',
    'last_name':'',
    'email':'',
    'active':'',
    'date_joined':''
};
/**
 *
 * @param {string}email email
 * @return {Promise<any>} boolean
 */
module.exports.checkEmail = function(email) {
  const sql = 'select count(*) from auth_user where email = $1';
  const params = [email];

  return new Promise(function(resolve, reject) {
    pgClient.query(sql, params, (err, res) => {
      if (err) {
        reject(err);
      } else {
        if(res['rows'][0]['count']>0){
            resolve(true);
        }
        else
        {
            resolve(false);
        }
      }
    });
  });
};

/**
 *
 * @param {string}email username
 * @param {string}password password
 * @return {Promise<any>} user infos
 */
module.exports.checkEmailAndPassword = function(email,password) {
    const passwordHash = md5(password);
    const sql = 'select * from auth_user where email = $1 and password = $2';
    const params = [email,passwordHash];

  
    return new Promise(function(resolve, reject) {
      pgClient.query(sql, params, (err, res) => {
        if (err) {
          reject(err);
        } else {
          if(res['rows'].length>0){
            resolve(res['rows'][0]['user_id']);
          }
          else{
            reject('password error');
          }
        }
      });
    });
};

  /**
 *
 * @param {string}username username
 * @param {string}password password
 * @param {string}email email
 * @return {Promise<any>} user infos
 */
module.exports.createUser = function(username,password,email) {
    const model_template ={
        'user_id':'',
        'password':'',
        'last_login':'',
        'is_superuser':'',
        'username':'',
        'first_name':'',
        'last_name':'',
        'email':'',
        'active':'',
        'date_joined':''
    };
    console.log(username,password,email);
    const passwordHash = md5(password);
    const user_id = uuidv4();
    var active = false;
    const date_joined = new Date();

    const sql = 'insert into auth_user (user_id, username,password, email,active, date_joined) VALUES($1,$2,$3,$4,$5,$6)';
    const params = [user_id, username,passwordHash,email,active, date_joined];

  
    return new Promise(function(resolve, reject) {
      pgClient.query(sql, params, (err, res) => {
        if (err) {
          reject(err);
        } else {
          _queryUserByUserid(user_id)
          .then(resQuery=>resolve(resQuery['rows'].length))
          .catch(errQuery=>reject(errQuery))
        }
      });
    });
};

/**
 *
 * @param {string}userid userid
 * @param {string}email email
 * @param {string}newpassword newpassword
 * @return {Promise<any>} user infos
 */
module.exports.updatePassword = function(userid,email,newpassword) {
    console.log(userid);
    const newpasswordhash = md5(newpassword);
    const sql = 'update auth_user set password = $1 where user_id = $2 and email = $3';
    const params = [newpasswordhash,userid,email];
  
    return new Promise(function(resolve, reject) {
      pgClient.query(sql, params, (err, res) => {
        if (err) {
          reject(err);
        } else {
            resolve(res);
        }
      });
    });
};

/**
 *
 * @param {string}email username
 * @return {Promise<any>} return
 */
module.exports.updateEmailValidated = function(email) {
  const sql = 'update auth_user set(email_is_verified) set($1) where email = $2';
  const params = [true,email];

  return new Promise(function(resolve, reject) {
    pgClient.query(sql, params, (err, res) => {
      if (err) {
        reject(err);
      } else {
          resolve(res);
      }
    });
  });
};


/**
 *
 * @param {string}user_id user_id
 * @return {Promise<any>} user infos
 */
function _queryUserByUserid(user_id) {
  const sql = 'select * from auth_user where user_id = $1';
  const params = [user_id];

  return new Promise(function(resolve, reject) {
    pgClient.query(sql, params, (err, res) => {
      if (err) {
        reject(err);
      } else {
          resolve(res);
      }
    });
  });
};

/**
 *
 * @param {string}email email
 * @return {Promise<any>} user infos
 */
function _queryUserByEmail(email) {
  const sql = 'select * from auth_user where user_name = $1';
  const params = [email];

  return new Promise(function(resolve, reject) {
    pgClient.query(sql, params, (err, res) => {
      if (err) {
        reject(err);
      } else {
          resolve(res);
      }
    });
  });
};
