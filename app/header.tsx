import Link from "next/link"

function Header() {
    return (
        <header>
            <nav className="bg-dark border-gray-200 dark:bg-white">
                <div className="max-w-screen-3xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="font-semibold text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-black md:dark:hover:text-black dark:hover:bg-white dark:hover:text-black md:dark:hover:bg-transparent">
                        <Link href="/">
                            Home
                        </Link>
                    </div>
                    <button data-collapse-toggle="navbar" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-white">
                            <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-black md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">
                                <Link href="/about">
                                    About
                                </Link>
                            </li>
                            <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-black md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">
                                <Link href="/projects">
                                    Projects
                                </Link>
                            </li>
                            <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-black md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">
                                <Link href="/blog">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Header