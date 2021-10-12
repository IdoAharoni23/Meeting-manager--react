const router = require("express").Router();
const {myQuery} = require("../db/db");



router.post("/", async(req,res)=>{
    const {team_code} = req.body
    if (!team_code) {
        return res.status(400).send("missing some info");
    }
    const meeting = await myQuery(`SELECT * FROM task3_meetingapp.meetings WHERE team_code = ${team_code};`)
    res.send(meeting)
})


module.exports = router;
