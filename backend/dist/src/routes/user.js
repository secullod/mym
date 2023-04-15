"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginUser_1 = require("./user/loginUser");
const registerUser_1 = require("./user/registerUser");
const googleUserLogin_1 = require("./googleUser/googleUserLogin");
const userRouter = express_1.default.Router();
userRouter.post('/login/google', googleUserLogin_1.googleUserLogin);
userRouter.post('/login', loginUser_1.loginUser);
userRouter.post('/signup', registerUser_1.registerUser);
exports.default = userRouter;
