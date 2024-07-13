import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv, { config } from "dotenv";
dotenv.config();
import { postSignup, postLogin } from "./controllers/user.js";
import { postTransaction,getTransactions} from "./controllers/transaction.js";


const app = express();
app.use(express.json());
app.use(cors());


const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URL)
    if (conn) {
        console.log(`MongoDB Connected Successfully✅`)
    }
};
connectDB();

app.get("/", (req, res) => {
    res.json({
        message: `Wecome to Expense Tracker API`
    })
})

app.post("/signup", postSignup)

app.post("/login", postLogin)

app.post("/transaction", postTransaction)
app.get("/transactions",getTransactions)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is runing on port ${PORT}`)
})