const router = require("express").Router();
const {myQuery} = require("../db/db");



router.post("/", async (req, res) => {
    try {
        const {team_code, date_start,  date_end, m_description, room_meeting } = req.body;
    if ( !team_code|| !date_start || !date_end|| !m_description|| !room_meeting) {
      return res.status(400).send("missing some info");
    }
    const data = await myQuery(  `INSERT INTO meetings (team_code, date_start,  date_end, m_description, room_meeting)
    VALUES (${team_code}, "${date_start}", "${date_end}", "${m_description}", "${room_meeting}");`)

    console.log(data);
    res.send(data)
    } catch (error) {
        console.log(error);
        res.send({error})
    }
    
  });

  module.exports = router;

