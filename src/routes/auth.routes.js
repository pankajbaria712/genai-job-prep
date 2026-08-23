const { Router } = require("express");
const authController = require("../controller/auth.controller");
const authMiddleware = require("../middleware/auth.middleware");

const authRouter = Router();

/**
 *  @route POST /api/auth/register
 *  @description Register new user
 *  @access Public
 */
authRouter.post("/register", authController.registerUserController);

/**
 *  @route POST /api/auth/register
 *  @description Login user using email and password
 *  @access Public
 */
authRouter.post("/login", authController.loginUserController);

/**
 *  @route GET /api/auth/register
 *  @description Clear the token from Cookie and backlist the token
 *  @access Public
 */
authRouter.get("/logout", authController.logoutUserController);

/**
 * @route GET /api/auth/get-me
 * @description get the current logged in user details
 * @access private
 */
authRouter.get(
  "/get-me",
  authMiddleware.authUser,
  authController.getMeController,
);

module.exports = authRouter;
