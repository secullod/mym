import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import User from "../../models/User";
import {JWT_SECRET} from "../../../variables";

export interface CreateUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string
}

export const createUser = async ({firstName, lastName, email, password}: CreateUser) => { // normalize email address
    const hashed = await bcrypt.hash(password, 10); // create the gravatar url
    try {
        const exists = await User.findOne({email})

        if (exists) {
            throw Error('Email already in use')
        }

        const user = await User.create({
            firstName,
            lastName,
            email: email.trim().toLowerCase(),
            password: hashed,
            updated: new Date(Date.now()),
        });

        return {data: jwt.sign({id: user._id}, JWT_SECRET)};
    } catch (err: any) {
        return {error: err.message}
    }
}
