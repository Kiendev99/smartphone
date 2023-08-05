const express = require ("express")
const cors = require ('cors')

const products = require("./products")

const app = express()

app.use(express.json())
app.use(cors())
app.get("/", (req,res)=>{
    res.send("Chao mung den voi the gioi di dong")
})
app.get("/products", (req,res)=>{
    res.send(products)
})

const port = process.env.port || 8080
app.listen(8080,console.log(`Server running on port ${port}`));