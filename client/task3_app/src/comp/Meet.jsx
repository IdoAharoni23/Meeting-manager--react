import React from 'react'

export default function Meet({meet, nameTeam}) {

    return (
        <div className="meetBox">
            <h3>{nameTeam}</h3>
            <h4>From: {meet.date_start.toString().slice(0, 19).replace('T', ' ').concat(":00")}</h4>
            <h4>To: {meet.date_end.toString().slice(0, 19).replace('T', ' ').concat(":00")}</h4>
            <h4>Description: {meet.m_description}</h4>
            <h4>Room: {meet.room_meeting}</h4>
        </div>
    )
}
