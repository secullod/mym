"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const helpers_1 = require("../../helpers");
const registerUser = async (req, res) => {
    try {
        let values = {
            firstName: req.body["firstName"],
            lastName: req.body["lastName"],
            email: req.body["email"],
            password: req.body["password"]
        };
        let user = await (0, helpers_1.createUser)(values);
        return res.status(200).json(user);
    }
    catch (error) {
        return res.status(400).send(error);
    }
};
exports.registerUser = registerUser;
