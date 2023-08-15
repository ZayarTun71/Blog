const express =require("express");
const auth_router=express.Router();

const AuthController =require("../controllers/auth");

auth_router.post("/login",AuthController.loginUser);

module.exports = auth_router;