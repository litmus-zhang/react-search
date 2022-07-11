const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 5000
const Users = require("./users")

app.use(cors())

app.get("/", (req, res) =>
{
    const { q } = req.query
    // console.log(q)
    const keys = ["first_name", "last_name", "email"]
  const search = data =>
  {
    return data.filter(item => keys.some(key => item[key].toLowerCase().includes(q)))
  }
    res.json(search(Users).splice(0, 12))
})

app.listen(PORT, ()=> console.log("API is working fine"))