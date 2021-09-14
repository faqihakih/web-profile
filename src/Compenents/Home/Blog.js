import React from 'react'
import {Link} from 'react-router-dom'

export default function Blog() {
    return (
        <div>
            <div className="lg:px-28 px-8 pb-8">
                <h1 className="text-4xl font-bold pb-8">Blog</h1>

                <div className="flex flex-wrap border-2 rounded-lg shadow-md mb-4">
                    <div className="my-auto md:w-8/12 w-full lg:px-10">
                        <img className="w-full block lg:hidden md:hidden sm:block rounded-t-md" src="https://res.cloudinary.com/zada/image/upload/v1631624697/image_42_bfucoy.png" alt="" />
                        <h1 className="lg:text-2xl text-lg py-4 px-5 lg:px-0 md:px-8 text-center lg:text-left md:text-left">Mengupas Redux Pada React (Khususnya React Native)</h1>
                        <p className="text-base font-light px-5 lg:px-0 md:px-8 pb-5 text-center lg:text-left md:text-left">Prieyudha Akadita S</p>
                    </div>
                    <div className="flex justify-end md:w-4/12">
                        <img className="hidden lg:flex md:flex" src="https://res.cloudinary.com/zada/image/upload/v1631624697/image_42_bfucoy.png" alt="" />
                    </div>
                </div>

                <div className="py-12 flex justify-center">
                    <Link className="bg-blue-400 rounded-full px-5 py-2 text-white">See All Blog</Link>
                </div>
            </div>
        </div>
    )
}
