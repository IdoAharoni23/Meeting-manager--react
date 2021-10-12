const router = require("express").Router();
const {myQuery} = require("../db/db");



router.get("/", async(req,res)=>{
    const teams = await myQuery(`SELECT * FROM task3_meetingapp.teams;`)
    res.send(teams)

})




module.exports = router;
