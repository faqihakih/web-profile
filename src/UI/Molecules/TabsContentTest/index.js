import React from 'react'
import { MentorDesc, SquadDesc } from '../../Organisms'

export default function TabContentTest({ openTab, describe, squadId, squadTitle, titleMentor, mentorName, exp, hobby, quote }) {
    return (
        <div>
            <div className={openTab === squadId ? "block" : "hidden"} id="link1">
                <SquadDesc title={squadTitle} desc={describe}/>
                <MentorDesc titleMentor={titleMentor} mentorName={mentorName} exp={exp} hobby={hobby} quote={quote}/>
            </div>
        </div>
    )
}
