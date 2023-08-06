const express = require ("express")
const cors = require ('cors')
const mongoose = require ('mongoose')
const products = require("./products")
const register = require("./routes/register")
const login = require("./routes/login")


const app = express()
require ("dotenv").config()

app.use(express.json())
app.use(cors())

app.use ("/api/register", register)
app.use ("/api/login", login)
app.get("/", (req,res)=>{
    res.send("Chao mung den voi the gioi di dong")
})
app.get("/products", (req,res)=>{
    res.send(products)
})

const port = process.env.port || 8080
const uri = process.env.DB_URI
app.listen(8080,console.log(`Server running on port ${port}`));
mongoose.connect( "mongodb://127.0.0.1:27017/smartphone" )

.then(()=> console.log("MongDB connection succesfull..."))
.catch((err)=> console.log("MongDB connection failed", err.message))
