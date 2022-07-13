const Transaction= require("../../model/Transaction")



module.exports = {
    getAllTransactions: async (args) =>
    {
        const { trxType, status, date } = args.sort
        // switch (trxType || status || date)
        // {
        //     case trxType === "credit":
        //         return await Transaction.find({ trxType: "credit" })
        //     case trxType === "debit":
        //         return await Transaction.find({ trxType: "debit" })
        //     case status === "pending":
        //         return await Transaction.find({ status: "pending" })
        //     case status ==="success":
        //         return await Transaction.find({ status: "success" })
        //     case status === "failed":
        //         return await Transaction.find({ status: "failed" })
        //     case "date":
        //         return await Transaction.find({ date: date })
        //     default:
        //         return await Transaction.find()
        // }
        if(status)
        {
            return await Transaction.find({ status: status })
        }
        if (trxType)
        {
            return await Transaction.find({ trxType: trxType })
        }
        if (date)
        {
            return await Transaction.find({ date: date })
        }
        return await Transaction.find()
    },
    addTransaction: async (args) =>
    {
        try {
            const { receiver, amount, description, date, type, status } = args.input
            const newTransaction = new Transaction({
                receiver,
                amount,
                description,
                date,
                type,
                status
            })
            await newTransaction.save()
            return newTransaction
        } catch (error) {
            console.log(error)
            throw error

        }
    },
    deleteTransaction: async (args) =>
    {
        try {
            const deletedTransaction = await Transaction.findByIdAndDelete(args.id)
            return deletedTransaction
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}