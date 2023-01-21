import axios from 'axios';

const api_url_local_base = 'http://localhost:4000/api/';
const api_url_login = api_url_local_base+'login';
const api_url_register = api_url_local_base+'register'+'/email';


function apiCaller_register(firstname,lastname,email,password){
    var params =JSON.stringify( {
        "name":firstname+' '+lastname,
        "email":email,
        "password":password
    });
    console.log("params",params);
    return new Promise(function (resolve, reject) {
        axios.post(api_url_register, params,{
            "headers": {
            "content-type": "application/json",
            },
        })
        .then(res=>{
            resolve(res);
        })
        .catch(err=>{
            reject(err);
        })
    });
};

function apiCaller_login(email,password){
    var params =JSON.stringify( {
        "email":email,
        "password":password
    });
    console.log("params",params);
    return new Promise(function (resolve, reject) {
        axios.post(api_url_login, params,{
            "headers": {
            "content-type": "application/json",
            },
        })
        .then(res=>{
            resolve(res);
        })
        .catch(err=>{
            reject(err);
        })
    });
};

export { apiCaller_register, apiCaller_login }