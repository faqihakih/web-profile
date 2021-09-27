import React from 'react'
import { TitleDesc } from '../../Atoms'
import Titles from '../../Atoms/Title'

export default function Title({title, desc}) {
    return (
        <div className="pt-36">
            <Titles title={title}/>
            <TitleDesc desc={desc}/>
        </div>
    )
}
