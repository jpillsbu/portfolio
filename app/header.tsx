"use client";

import Link from "next/link"
import { useState } from "react"

function Header() {
    const [navbar, setNavbar] = useState(false)
    return (
        <header>
            <nav className="bg-gray-50">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className={`relative flex ${navbar ? "h-50" : "h-16"} md:h-16 items-center justify-between`}>
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <div className="md:hidden">
                                <button type="button" className="inline-flex bg-black items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={() => setNavbar(!navbar)}>
                                    {navbar ? (
                                        <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    ) : (
                                        <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'pl-4 block' : 'hidden'}`}>
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li>
                                    <Link className="md:bg-gray-200 rounded-md text-gray-700 px-3 py-2 text-sm font-medium" onClick={() => setNavbar(false)} href="/">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" onClick={() => setNavbar(false)} href="/about">
                                        About
                                    </Link>
                                </li>
                                <li>

                                    <Link className="text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" onClick={() => setNavbar(false)} href="/projects">
                                        Projects
                                    </Link>
                                </li>
                                <li>

                                    <Link className="text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" onClick={() => setNavbar(false)} href="/blog">
                                        Blog
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header