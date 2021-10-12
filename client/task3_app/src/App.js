import React from 'react'
import {useState, useEffect} from 'react'
import Meetings from './comp/Meetings'
import NewMeeting from './comp/NewMeeting'
import Select from './comp/Select'

export default function App() {



  const [teams, setTeams] = useState([])
  const [selectTeam, setSelectTeam] = useState(null)
  const [teamMeating, setTeamMeating] = useState([])
  const [nameTeam, setNameTeam] = useState("")


  const getTeams = async()=>{
    try {
      const res = await fetch("http://localhost:1000/teams",{
        method : "GET",
        headers:{"content-type":"application/json",
                  'Accept': 'application/json'}
      })
      const data = await res.json()
      setTeams(data)
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTeams()
      
  }, [])



    const getMeetings = async()=>{
      try {
        const res = await fetch("http://localhost:1000/meetings",{
          method : "POST",
          body: JSON.stringify(selectTeam),
          headers:{"content-type":"application/json"}
        })
        const data = await res.json()
        setTeamMeating(data)
      } catch (error) {
        console.log(error);
      }
    }

  const selectedTeam = async(n)=>{
    setSelectTeam({team_code : n})
    if (n ===1) {
      setNameTeam("react team")
    }
    if (n ===2) {
      setNameTeam("nodejs team")
    }
    if (n ===3) {
      setNameTeam("angular team")
    }
    if (n ===4) {
      setNameTeam("css team")
    }
    if (n ===5) {
      setNameTeam("javascript team")
    }
  }

  useEffect(() => {
    getMeetings()
  }, [selectTeam])




  return (
    <div>
    <h1>Meeting Manager</h1>   
    <div className="main">  
    <div className="meeting">
    <div className="selectDiv">
        <Select teams={teams} selectedTeam={selectedTeam} getMeetings={getMeetings}></Select>  
    </div>
    <div className="meetingDiv">
        <Meetings teamMeating={teamMeating} nameTeam={nameTeam}></Meetings>
    </div>
    </div>
    <div className="addDiv">
        <NewMeeting getMeetings={getMeetings} ></NewMeeting>
    </div> 


    </div>
    </div>
  )
}
