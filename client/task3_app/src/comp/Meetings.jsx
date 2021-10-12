import React from 'react'
import Meet from './Meet'

export default function Meetings({teamMeating, nameTeam}) {
    return (
        <div>
            {teamMeating.map(me=><Meet nameTeam={nameTeam} key={me.number_meeting} meet={me}></Meet> )}
        </div>
    )
}
