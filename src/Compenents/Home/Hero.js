import React from 'react'

export default function Hero() {
    return (
        <div>
            <div className="bg-hero-pattern w-full h-screen lg:px-28 md:px-16 px-10 py-64 text-white">
                <div className="bg-black w-screen h-screen lg:-ml-32 md:-ml-16 -ml-10 -mt-64 bg-opacity-50"></div>
                <div className="z-10 -mt-96">
                    <h1 className="text-6xl font-bold lg:ml-0 md:ml-0 sm:ml-0 ml-2">Plugin</h1>
                    <ul>
                        <li className="inline-block lg:ml-0 md:ml-0 sm:ml-0 ml-2">Passionate</li>
                        <li className="inline-block lg:ml-12 md:ml-6 sm:ml-5 ml-2">Learning</li>
                        <li className="inline-block lg:ml-12 md:ml-6 sm:ml-5 ml-2">Global</li>
                        <li className="inline-block lg:ml-12 md:ml-6 sm:ml-5 ml-2">Unity</li>
                        <li className="inline-block lg:ml-12 md:ml-6 sm:ml-5 ml-2">Inovate</li>
                        <li className="inline-block lg:ml-12 md:ml-6 sm:ml-5 ml-2">Nationality</li>
                    </ul>

                    <h2 className="text-2xl mt-4 lg:ml-0 md:ml-0 sm:ml-0 ml-2">komunitas linux dan pengembangan aplikasi di</h2>
                    <h2 className="text-2xl lg:ml-0 md:ml-0 sm:ml-0 ml-2">Politeknik Harapan Bersama Tegal.</h2>
                </div>
            </div>
        </div>
    )
}
