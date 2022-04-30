var express = require('express');
var userRouter = express.Router();
var userController = require("./UserController");
var authController = require('./AuthController');

userRouter.post("/", userController.createUser);
userRouter.get('/', authController.protectSystem, authController.isAdmin, userController.getAllUsers);
userRouter.get('/:id', userController.getUserById);
userRouter.patch('/:id', userController.updateUserById);
userRouter.delete("/:id", authController.protectSystem, authController.isAdmin, userController.deleteUserById);


userRouter.post('/login', authController.login);
userRouter.post('/signup', authController.signup);

userRouter.post("/forgotPassword", authController.forgotPassword);
userRouter.patch("/resetPassword/:token", authController.resetPassword);
userRouter.patch("/updatePassword/:id", authController.protectSystem, authController.updatePassword);

module.exports = userRouter;
