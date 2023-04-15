"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleUserLogin = void 0;
const helpers_1 = require("../../helpers");
const googleUserLogin = async (req, res) => {
    try {
        let values = {
            firstName: req.body["firstName"],
            lastName: req.body["lastName"],
            email: req.body["email"]
        };
        let user = await (0, helpers_1.loginGoogleUser)(values);
        return res.status(200).json(user);
    }
    catch (error) {
        res.status(400).send(error);
    }
};
exports.googleUserLogin = googleUserLogin;
