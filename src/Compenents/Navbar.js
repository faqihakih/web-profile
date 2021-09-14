import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const [navbarColor, setNavbarColor] = React.useState(false);

    const changeNavbarColor = () => {
        if (window.scrollY <= 80) {
            setNavbarColor(false)
        } else {
            setNavbarColor(true)
        }
    }

    window.addEventListener('scroll', changeNavbarColor)

    return (
        <div>
            <nav className={"px-4 lg:px-28 md:px-10 sm:px-4 py-3 mb-3 text-white w-full z-20 fixed top-0 bg-black bg-opacity-50" + (navbarColor ? "bg-black" : "bg-black bg-opacity-50")}>
                <div className="flex flex-wrap justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                            to=""
                        >
                            <img src="https://res.cloudinary.com/zada/image/upload/v1618759827/Logo_ugofdy.svg" alt="" width="56" height="40" />
                        </Link>
                        <button
                            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            |||
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                                    href="#pablo"
                                >
                                    <i className="fab fa-facebook-square text-lg leading-lg opacity-75"></i><span className="ml-2">WiyataOs</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                                    href="#pablo"
                                >
                                    <i className="fab fa-twitter text-lg leading-lg opacity-75"></i><span className="ml-2">Blog</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                                    href="#pablo"
                                >
                                    <i className="fab fa-pinterest text-lg leading-lg opacity-75"></i><span className="ml-2">Event</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                                    href="#pablo"
                                >
                                    <i className="fab fa-pinterest text-lg leading-lg opacity-75"></i><span className="ml-2">Achivment</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                                    href="#pablo"
                                >
                                    <i className="fab fa-pinterest text-lg leading-lg opacity-75"></i><span className="ml-2">Registration Member</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
