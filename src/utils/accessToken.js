const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config();

exports.generateAccessToken = async (data) => {
  return await jwt.sign(
    {
      data: data.name,
      // expiresIn:"1h"
    },
    process.env.SECRET_TOKEN
  );
};

exports.verifyAccessToken = async (token) => {
    return await jwt.verify(token, process.env.SECRET_TOKEN);
  };
  
  exports.parseToken =(authorizationHeader) =>{
    const BearerToken =authorizationHeader;
    let token = BearerToken.split(" ");
    token=token[1];
    return token;
  }