const express = require("express")
const cors = require("cors")
require("./db/db")

const app = express()

app.use(cors())
app.use(express.json())


app.use("/teams", require('./route/teams'))
app.use("/meetings", require('./route/meetings'))
app.use("/addmeeting", require('./route/addMeeting'))


app.get("/", (req,res)=>{
    res.send("hello world")
})







app.listen(1000,()=>{console.log("running on port 1000");})