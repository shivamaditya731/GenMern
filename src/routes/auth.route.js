const express = require('express');
const authController= require('../controlers/auth.controler');
const authRouter = express.Router();
/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public
 */
authRouter.post("/register",authController.registerUserController);
module.exports = authRouter;