import * as jwt from "jsonwebtoken";
import GoogleUser from "../../models/googleUser";
import {JWT_SECRET} from "../../../variables";


export interface LoginGoogleUser {
    firstName: string;
    lastName: string;
    email: string;
}

export const loginGoogleUser = async ({firstName, lastName, email}: LoginGoogleUser) => { // normalize email address
    try {
        const user = await GoogleUser.findOneAndUpdate({email}, {
            firstName,
            lastName,
            email: email.trim().toLowerCase(),
            updated: new Date(Date.now()),
        }, {upsert: true, strict: true, new: true})

        return {data: jwt.sign({id: user._id}, JWT_SECRET)};
    } catch (err: any) {
        return {error: err.message}
    }
}
