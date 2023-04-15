import express from 'express';
import {loginUser} from "./user/loginUser";
import {registerUser} from "./user/registerUser";
import {googleUserLogin} from "./googleUser/googleUserLogin";

const userRouter = express.Router();

userRouter.post('/login/google', googleUserLogin);
userRouter.post('/login', loginUser);
userRouter.post('/signup', registerUser)

export default userRouter
