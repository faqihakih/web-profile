import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div>
            <footer className="text-white body-font bg-blue-400">
                <div className="lg:px-28 md:px-10 sm:px-8 px-6 pt-24 mx-auto">
                    <div className="flex flex-wrap md:text-left order-first">
                        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium tracking-widest text-sm mb-3">
                                Sosial Media
                            </h2>
                            <nav className="list-none mb-10">
                                <li className="mt-3">
                                    <img
                                        src="https://res.cloudinary.com/zada/image/upload/v1631643319/image_6_npdgfy.png"
                                        alt=""
                                        style={{ width: "20px", height: "20px" }}
                                        className="inline-block mr-3 -mt-1"
                                    />
                                    <Link to="" className="hover:text-gray-800">
                                        PluginOfficiall
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <img
                                        src="https://res.cloudinary.com/zada/image/upload/v1631643512/image_7_rgucjh.png"
                                        alt=""
                                        style={{ width: "20px", height: "20px" }}
                                        className="inline-block mr-3 -mt-1"
                                    />
                                    <Link to="" className="hover:text-gray-800">
                                        PluginOfficiall
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <img
                                        src="https://res.cloudinary.com/zada/image/upload/v1631643560/image_8_fzm9fm.png"
                                        alt=""
                                        style={{ width: "20px", height: "20px" }}
                                        className="inline-block mr-3 -mt-1"
                                    />
                                    <Link to="" className="hover:text-gray-800">
                                        PluginOfficiall
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <img
                                        src="https://res.cloudinary.com/zada/image/upload/v1631643604/image_9_y2o5on.png"
                                        alt=""
                                        style={{ width: "20px", height: "20px" }}
                                        className="inline-block mr-3 -mt-1"
                                    />
                                    <Link to="" className="hover:text-gray-800">
                                        PLUGIN
                                    </Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium tracking-widest text-sm mb-3">
                                Tentang
                            </h2>
                            <nav className="list-none mb-10">
                                <li className="mt-3">
                                    <img
                                        src="https://res.cloudinary.com/zada/image/upload/v1631644525/image_10_ssgesc.png"
                                        alt=""
                                        style={{ width: "20px", height: "20px" }}
                                        className="inline-block mr-3 -mt-1"
                                    />
                                    <Link to="" className="hover:text-gray-800">
                                        Cek Sertifikat
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <img
                                        src="https://res.cloudinary.com/zada/image/upload/v1631644577/image_11_sk7vx7.png"
                                        alt=""
                                        style={{ width: "20px", height: "20px" }}
                                        className="inline-block mr-3 -mt-1"
                                    />
                                    <Link to="" className="hover:text-gray-800">
                                        Kebijakan Privasi
                                    </Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-2/6 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium tracking-widest text-sm mb-3">
                                Home Base
                            </h2>
                            <nav className="list-none mb-10">
                                <li className="mt-3">
                                    <img
                                        src="https://res.cloudinary.com/zada/image/upload/v1631644609/image_12_pbkfog.png"
                                        alt=""
                                        style={{ width: "20px", height: "20px" }}
                                        className="inline-block mr-3 -mt-1"
                                    />
                                    <Link to="" className="hover:text-gray-800">
                                        Perumahan nDalem Parikesit B7
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <img
                                        src="https://res.cloudinary.com/zada/image/upload/v1631644639/image_13_wnzq4k.png"
                                        alt=""
                                        style={{ width: "20px", height: "20px" }}
                                        className="inline-block mr-3 -mt-1"
                                    />
                                    <Link to="" className="hover:text-gray-800">
                                        plugintegal@gmail.com
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <img
                                        src="https://res.cloudinary.com/zada/image/upload/v1631644670/image_14_ypxave.png"
                                        alt=""
                                        style={{ width: "20px", height: "20px" }}
                                        className="inline-block mr-3 -mt-1"
                                    />
                                    <Link to="" className="hover:text-gray-800">
                                        Poltek Harber Linux User Group - Indonesia
                                    </Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-2/6 md:w-1/2 w-full px-4 lg:py-14 md:py-10 sm:py-0 pb-4">
                            <h2 className="title-font font-medium tracking-widest text-sm mb-3">
                                Poltek Harber Linux User Group - Indonesia
                            </h2>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
