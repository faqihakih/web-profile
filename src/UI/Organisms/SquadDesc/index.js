import React from 'react';
import { Image } from '../../Atoms';
import { Title } from '../../Molecules';

export default function SquadDesc({title, desc}) {
    return (
        <div className="px-28 flex flex-wrap">
            <div className="w-1/2">
                <Title title={title} desc={desc}/>
            </div>
            <div className="w-1/2">
                <Image widthBorder="w-64 h-64 lg:h-80 md:h-80 sm:h-64 lg:w-80 md:w-80 sm:w-64" classNameContainer="lg:py-24 md:py-14 sm:py-8 py-8" classNameImage="rounded-xl z-10 absolute ml-14 mt-5 w-64 h-64 lg:h-80 md:h-80 sm:h-64 lg:w-80 md:w-80 sm:w-64" imgSrc="https://res.cloudinary.com/zada/image/upload/v1631285993/lp1AKIUV3yo_h0fkkn.png" border={true} />
            </div>
        </div>
    )
}
