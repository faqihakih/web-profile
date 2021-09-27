import React from 'react'
import { Titles, Image} from '../../Atoms'

export default function TechStack() {
    return (
        <div className="text-center">
            <Titles title="Tech Stack"/>
            <div className="flex justify-center">
                <Image imgSrc="https://res.cloudinary.com/zada/image/upload/v1632606003/image_31_tuirk6.png" border={false} classNameImage="h-14" classNameContainer="mx-4 mt-3"/>
                <Image imgSrc="https://res.cloudinary.com/zada/image/upload/v1632606038/image_29_wlbur0.png" border={false} classNameImage="h-14" classNameContainer="mx-4 mt-3"/>
                <Image imgSrc="https://res.cloudinary.com/zada/image/upload/v1632606040/image_30_anf5kw.png" border={false} classNameImage="h-14" classNameContainer="mx-4 mt-3"/>
                <Image imgSrc="https://res.cloudinary.com/zada/image/upload/v1632606053/image_32_tuibyz.png" border={false} classNameImage="h-14" classNameContainer="mx-4 mt-3"/>
                <Image imgSrc="https://res.cloudinary.com/zada/image/upload/v1632606044/image_33_vo9duo.png" border={false} classNameImage="h-14" classNameContainer="mx-4 mt-3"/>
            </div>
        </div>
    )
}
