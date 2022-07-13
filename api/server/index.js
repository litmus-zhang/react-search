const express = require("express")
require("dotenv").config()
const app = express()
const {graphqlHTTP}  = require("express-graphql")
const cors = require("cors")
const PORT = process.env.PORT || 4000
const schema = require("./graphql/schema/index")
const Resolvers = require("./graphql/resolvers/index")
const connectDb = require("./config/db")
// const Users = require("./users")



app.use(cors())

// app.get("/", (req, res) =>
// {
//     const { q } = req.query
//     // console.log(q)
//     const keys = ["first_name", "last_name", "email"]
//   const search = data =>
//   {
//     return data.filter(item => keys.some(key => item[key].toLowerCase().includes(q)))
//   }
//     res.json(search(Users).splice(0, 12))
// })

connectDb()

app.use("/graphql", graphqlHTTP({
    schema,
    rootValue: Resolvers,
    graphiql: true
}) )

app.listen(PORT, () => console.log(`API is working fine on port ${PORT}`))