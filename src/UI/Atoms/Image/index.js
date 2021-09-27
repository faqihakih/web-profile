import React from 'react'

export default function Image({ imgSrc, border , classNameImage, classNameContainer, widthBorder}) {
    console.log(typeof(border));
    console.log(border);
    let type = border;
    return (
        <div>
            {
                type ? <div className={"hidden lg:flex md:flex sm:hidden justify-center "+ classNameContainer}>
                <div className={"border border-blue-400 rounded-xl ml-4 "+ widthBorder}></div>
                <img className={" "+classNameImage} src={imgSrc} alt="" />
            </div> : 
            <div className={"hidden lg:flex md:flex sm:hidden justify-center "+ classNameContainer}>
                <div className=""></div>
                <img className={" "+classNameImage} src={imgSrc} alt="" />
            </div>
            }
        </div>
    )
}
