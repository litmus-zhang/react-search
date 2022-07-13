const mongoose = require("mongoose")



const connectDB = () =>
{
    mongoose.connect(process.env.MONGO_DB)

    console.log("Database Connection Successful")
}


module.exports = connectDB