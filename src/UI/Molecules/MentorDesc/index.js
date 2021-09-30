import React from 'react'
import { MentorName, Titles } from '../../Atoms'

export default function MentorDesc({title, mentorName, exp, hobby, quote}) {
    return (
        <div className="pt-36">
            <Titles title={title}/>
            <MentorName detail="Name" value={mentorName}/>
            <MentorName detail="Experience" value={exp}/>
            <MentorName detail="Hobby" value={hobby}/>
            <MentorName detail="Quotes" value={quote}/>
        </div>
    )
}
