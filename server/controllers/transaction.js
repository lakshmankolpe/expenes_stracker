import Transactin from "../models/Transaction.js"

const postTransaction = async (req, res) => {
    const { title, amount, category, type, user } = req.body;

    const transaction = new Transactin({
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

export { postTransaction }