import React, { useState } from 'react'

export default function NewMeeting({getMeetings}) {
    const [team_code, setTeam_code] = useState("")
    const [date_start, setDate_start] = useState("")
    const [date_end, setDate_end] = useState("")
    const [m_description, setM_description] = useState("")
    const [room_meeting, setroom_meeting] = useState("")

    const addMeeting = async()=>{
        if (team_code == "" || date_start== "" || date_end == ""|| m_description== "" ||room_meeting =="") {
            return alert("missing some info")
        }
        try {
          const res = await fetch("http://localhost:1000/addmeeting",{
            method : "POST",
            body: JSON.stringify({team_code, date_start,  date_end, m_description, room_meeting}),
            headers:{"content-type":"application/json"}
          })
          getMeetings()
        } catch (error) {
          console.log(error);
        }
      }

    return (
        <div className="new">
          <h3><u>Add mew meeting form </u></h3>
          Team Number: <input type="number" onChange={(e)=>setTeam_code(Number(e.target.value))}/>
          <br />
          Time Start: <input type="datetime-local" name="" id="" onChange={(e)=>setDate_start(e.target.value.toString().slice(0, 19).replace('T', ' ').concat(":00"))}/>
          <br />
          Time End: <input type="datetime-local" name="" id=""onChange={(e)=>setDate_end(e.target.value.toString().slice(0, 19).replace('T', ' ').concat(":00"))}/>
          <br />
          Description: <input type="text" onChange={(e)=>setM_description(e.target.value)}/>
          <br />
          Room: <input type="text" onChange={(e)=>setroom_meeting(e.target.value)}/>
            <br />
          <button className="addBtn" onClick={()=>addMeeting()}>Send</button>
        </div>
    )
}
