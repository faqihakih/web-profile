import React from 'react'
import { MentorName, Titles } from '../../Atoms'

export default function MentorDesc({title}) {
    return (
        <div className="pt-36">
            <Titles title={title}/>
            <MentorName detail="Name" value="Rijal"/>
            <MentorName detail="Experience" value="React JS, Html, Css"/>
            <MentorName detail="Hobby" value="Bernyanyi"/>
            <MentorName detail="Quotes" value="Teteplah bernafas meskipun itu dapat membunuhmu"/>
        </div>
    )
}
