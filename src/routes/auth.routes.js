const { Router } = require("express");
const authController = require("../controller/auth.controller");

const authRouter = Router();

/**
 *  @routes POST /api/auth/register
 *  @description Register new user
 *  @access Public
 */
authRouter.post("/register", authController.registerUserController);

module.exports = authRouter;
