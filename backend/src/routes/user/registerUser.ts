import express from "express";
import {CreateUser, createUser} from "../../helpers";

export const registerUser = async (req: express.Request, res: express.Response) => {
    try {

        let values: CreateUser = {
            firstName: req.body["firstName"],
            lastName: req.body["lastName"],
            email: req.body["email"],
            password: req.body["password"]
        }

        let user = await createUser(values)

        return res.status(200).json(user)
    } catch (error) {
        return res.status(400).send(error)
    }
}
