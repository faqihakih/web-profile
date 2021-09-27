import React from 'react'

export default function TitleDesc({ desc }) {
    return (
        <div>
            <p className="font-normal lg:text-lg md:text-sm sm:text-xs text-gray-500 pt-6">{desc}</p>
        </div>
    )
}
