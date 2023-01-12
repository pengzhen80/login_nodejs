const pgClient = require('../clients/local.postgresql');
const { v4: uuidv4 } = require('uuid');

const model_template ={
    'user_id':'',
    'password':'',
    'last_login':'',
    'is_superuser':'',
    'username':'',
    'first_name':'',
    'last_name':'',
    'email':'',
    'email_is_verified':'',
    'date_joined':''
};
/**
 *
 * @param {string}email email
 * @return {Promise<any>} boolean
 */
module.exports.checkUserName = function(email) {
  const sql = 'select count(*) where username = $1';
  const params = [email];

  return new Promise(function(resolve, reject) {
    pgClient.query(sql, params, (err, res) => {
      if (err) {
        reject(err);
      } else {
        if(rows[0]['count']>0){
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
module.exports.checkUserNameAndPassword = function(email,password) {
    const sql = 'select count(*) where email = $1 and password = $2';
    const params = [email,password];
  
    return new Promise(function(resolve, reject) {
      pgClient.query(sql, params, (err, res) => {
        if (err) {
          reject(err);
        } else {
            resolve(rows);
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
        'email_is_verified':'',
        'date_joined':''
    };
    const user_id = uuidv4();
    email_is_verified = false;
    date_joined = new Date.now();

    const sql = 'insert into auth_user (user_id, username,password, email,email_is_verified, date_joined) VALUES($1,$2,$3,$4,$5,$6)';
    const params = [user_id, username,password,email,email_is_verified, date_joined];

  
    return new Promise(function(resolve, reject) {
      pgClient.query(sql, params, (err, res) => {
        if (err) {
          reject(err);
        } else {
            const sql_askinfo = 'select * where user_id = $1';
            const params_askinfo = [user_id];
          
            return new Promise(function(resolve, reject) {
              pgClient.query(sql_askinfo, params_askinfo, (err, res) => {
                if (err) {
                  reject(err);
                } else {
                    resolve(rows);
                }
              });
            });
        }
      });
    });
};

/**
 *
 * @param {string}username username
 * @param {string}oldpassword oldpassword
 * @param {string}newpassword newpassword
 * @return {Promise<any>} user infos
 */
module.exports.updatePassword = function(email,oldpassword,newpassword) {
    const sql = 'update auth_user set password = $1 where email = $2 and password = $3';
    const params = [newpassword,email,oldpassword];
  
    return new Promise(function(resolve, reject) {
      pgClient.query(sql, params, (err, res) => {
        if (err) {
          reject(err);
        } else {
            resolve(rows);
        }
      });
    });
};

