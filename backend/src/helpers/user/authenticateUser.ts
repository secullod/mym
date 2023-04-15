import User from "../../models/User";
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import {JWT_SECRET} from "../../../variables";

export interface LoginUser {
    email: string;
    password: string
}

export const authenticateUser = async ({email, password}: LoginUser) => {
    try {
        const user = await User.findOne({email: email.trim().toLowerCase()})

        if (!user) {
            throw Error('Invalid email');
        }

        const valid = await bcrypt.compare(password, user.password);

        if (!valid) {
            throw Error('Invalid password');
        }

        return {data: jwt.sign({id: user._id}, JWT_SECRET)};
    } catch (error: any) {
        return {error: error.message};
    }
};
