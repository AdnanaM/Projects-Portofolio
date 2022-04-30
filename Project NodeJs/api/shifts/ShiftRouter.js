var express = require('express');
var shiftRouter = express.Router();
var shiftController = require("./ShiftController");
var authController = require('../users/AuthController');

shiftRouter.post("/", shiftController.addShift);
shiftRouter.get("/", authController.protectSystem, authController.isAdmin, shiftController.getAllShifts);
shiftRouter.get("/:id", shiftController.getShiftById);
shiftRouter.patch("/:id", shiftController.updateShiftById);
shiftRouter.delete("/:id", authController.protectSystem, authController.isAdmin, shiftController.deleteShiftById);

module.exports = shiftRouter;