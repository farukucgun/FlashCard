import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import FlashCardRoute from "./routes/flashCard.js";

const app = express();
dotenv.config();
mongoose.set('strictQuery', false);

app.use(express.urlencoded({ limit:"30mb", extended: true }));
app.use(express.json({ limit:"30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to Flash Card API");
})

app.use("/flashCard", FlashCardRoute);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        })
    })
    .catch((err) => {
        console.log("Couldn't connect to mongodb");
        console.log(err.message);
    })



