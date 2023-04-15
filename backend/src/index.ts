import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import userRoutes from './routes/user';
import {MONGO_DB, PORT} from "../variables";

mongoose.connect(MONGO_DB).catch(error => console.error(error));

const app = express();

mongoose.connection.on("error", (error: any) => console.error(error));
mongoose.connection.once("open", () => console.log("Connected to Database"));

app.listen(PORT, () => console.log(`⚡️[server]: Server is running on PORT: ${PORT}`));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/user', userRoutes);


