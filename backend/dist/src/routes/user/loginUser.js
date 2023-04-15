"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const helpers_1 = require("../../helpers");
const loginUser = async (req, res) => {
    try {
        let values = {
            email: req.body["email"],
            password: req.body["password"]
        };
        let user = await (0, helpers_1.authenticateUser)(values);
        return res.status(200).json(user);
    }
    catch (error) {
        res.status(400).send(error);
    }
};
exports.loginUser = loginUser;
