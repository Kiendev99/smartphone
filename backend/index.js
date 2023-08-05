const express = require ("express")
const cors = require ('cors')
const app = express()

app.use(express.json())
app.use(cors())
app.get("/", (req,res)=>{
    res.send("Chao mung den voi the gioi di dong")
})
app.get("/products", (req,res)=>{
    res.send([2,3,4])
})

const port = process.env.port || 8080
app.listen(8080,console.log(`Server running on port ${port}`));