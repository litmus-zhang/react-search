const mongoose = require("mongoose")

const TransactionSchema = new mongoose.Schema({
    receiver: {
        type: String,
    },
    description: {
        type: String,
    },
    amount: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now()
    },
    trxType : {
        type: String,
        enum: ["credit", "debit"],
        default: "credit"
    },
    status : {
        type: String,
        enum: ["pending", "success", "failed"],
        default: "pending"
    },
})

module.exports = mongoose.model("Transaction", TransactionSchema)