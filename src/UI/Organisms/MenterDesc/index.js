import React from 'react'
import { Image } from '../../Atoms'
import { MentorDescs } from '../../Molecules'

export default function MentorDesc({titleMentor, mentorName, exp, hobby, quote}) {
    return (
        <div className="px-28 flex flex-wrap">
            <div className="w-1/2">
                <Image widthBorder="w-64 h-64 lg:h-64 md:h-64 sm:h-64 lg:w-64 md:w-64 sm:w-64" classNameContainer="lg:py-24 md:py-14 sm:py-8 py-8" classNameImage="rounded-xl z-10 absolute ml-14 mt-5 w-64 h-64 lg:h-64 md:h-64 sm:h-64 lg:w-64 md:w-64 sm:w-64" imgSrc="https://res.cloudinary.com/zada/image/upload/v1631285993/lp1AKIUV3yo_h0fkkn.png" border={true} />
            </div>
            <div className="w-1/2">
                <MentorDescs title={titleMentor} mentorName={mentorName} exp={exp} hobby={hobby} quote={quote} />
            </div>
        </div>
    )
}
