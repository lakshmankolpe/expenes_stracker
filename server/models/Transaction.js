import { Schema,model } from "mongoose";
import User from "./User";

const transactionSchema = new Schema({
    amount:{
        type:Number,
        required: true,
    },
    category:{
        type:String,
        default:"others"
    },
    type:{
        type:String,
    
        enum:["debit","credit"],
    },
    User:{
        type:Schema.Types.ObjectId,
        ref:"User",
    }
})

const Transaction = model("Transaction",transactionSchema);

export default Transaction