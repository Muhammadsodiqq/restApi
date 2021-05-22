const express = require("express")
const cors = require("cors")
const path = require("path")
const fs = require("fs")
const psql = require("./moduls/postgres")()
const app = express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(async(req,res,next) => {
    req.psql = await psql
    next()
})

fs.readdir(path.join(__dirname, "routes"), (err,files) => {
    files.forEach(file => {
        let route = require(path.join(__dirname, "routes", file))
        if(route.router && route.path) {
            app.use(route.path,route.router)
        }
    })
})




app.listen(80, _=> console.log("server ready "))