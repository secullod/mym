import express from "express";
import {authenticateUser, CreateUser, LoginUser} from "../../helpers";

export const loginUser = async (req: express.Request, res: express.Response) => {
    try {

        let values: LoginUser = {
            email: req.body["email"],
            password: req.body["password"]
        }

        let user = await authenticateUser(values)

        return res.status(200).json(user)
    } catch (error) {
        res.status(400).send(error)
    }
}
