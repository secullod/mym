import express from "express";
import {LoginGoogleUser, loginGoogleUser} from "../../helpers";

export const googleUserLogin = async (req: express.Request, res: express.Response) => {
    try {

        let values: LoginGoogleUser = {
            firstName: req.body["firstName"],
            lastName: req.body["lastName"],
            email: req.body["email"]
        }

        let user = await loginGoogleUser(values)

        return res.status(200).json(user)
    } catch (error) {
        res.status(400).send(error)
    }
}
