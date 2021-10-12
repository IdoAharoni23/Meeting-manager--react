import React from 'react'

export default function Select({teams, selectedTeam, getMeetings}) {
    return (
        <div>
            <select className="selectBtn"  onChange={(e)=>{  selectedTeam(Number(e.target.value))}}>
                <option>Chose team...</option>
                {teams.map(te=><option value= {te.team_code} key={te.team_code} >{te.team_name}</option>)}
            </select>
        </div>
    )
}

