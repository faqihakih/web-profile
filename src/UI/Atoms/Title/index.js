import React from 'react'

export default function Titles({title}) {
    return (
        <div>
            <h1 className="lg:text-4xl md:text-2xl sm:text-xl text-xl font-bold">{title}</h1>
        </div>
    )
}
