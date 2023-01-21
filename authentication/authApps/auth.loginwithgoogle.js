const express = require("express");
const bodyparser = require("body-parser");
const request = require("request");

let getGoogleProfile = function(accessToken) {
  return new Promise((resolve, reject) => {
   if(!accessToken){
    resolve(null);
    return
   };
   request(
    `https://oauth2.googleapis.com/tokeninfo?id_token=${accessToken}`,
    function (error, response, body) {
     if (error) {
      console.log(error)
     }
     console.log(body);
     body = JSON.parse(body);
     if(body.error) {
      reject(body.error);
     } else {
      resolve(body);
     }
    }
   )
  })
 }

 app.post("/user/signin", function(req, res) {
  if (!req.body.access_token) {
    res
      .status(400)
      .send({ error: "Request Error: Google access token is required." });
    return;
  }
  // Get profile from google
  getGoogleProfile(data.access_token)
    .then(function(profile) {
      if (!profile.name || !profile.email) {
        res.status(400).send({
          error: "Permissions Error: name, email are required."
        });
        return;
      }
      res.send({
        user: {
          name: profile.name,
          email: profile.email,
          picture: profile.picture
        }
      });
    })
    .catch(function(error) {
      res.status(500).send({ error: error });
    });
});