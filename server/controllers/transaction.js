import Transaction from "../models/Transaction.js"
import User from "../models/User.js";

const postTransaction = async (req, res) => {
    const { title, amount, category, type, user } = req.body;

    const transaction = new Transaction({
        title,
        amount,
        category,
        type,
        user,
    })
    try {
        const sevedtransaction = await transaction.save();
        res.json({
            success: true,
            message: `Transaction succesfull`,
            data: sevedtransaction,

        })
    }
    catch(e) {
        res.json({
            success: false,
            message: e.message,
            data: null
        })
    }

}

const getTransactions = async (req,res)=>{
    const { userId } = req.query;

    const user  = await User.findById(userId)
    if(!user){
        return res.json({
            success:false,
            message:`User not found`,
            data:null,
        })
    }
const transactions = await Transaction.find({user:userId})
res.json({
    success:true,
    message:`Transactions fetched successfully`,
    data:transactions
})
}









export { postTransaction,getTransactions}