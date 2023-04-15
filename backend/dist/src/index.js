"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const user_1 = __importDefault(require("./routes/user"));
const variables_1 = require("../variables");
mongoose_1.default.connect(variables_1.MONGO_DB).catch(error => console.error(error));
const app = (0, express_1.default)();
mongoose_1.default.connection.on("error", (error) => console.error(error));
mongoose_1.default.connection.once("open", () => console.log("Connected to Database"));
app.listen(variables_1.PORT, () => console.log(`⚡️[server]: Server is running on PORT: ${variables_1.PORT}`));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use('/user', user_1.default);
