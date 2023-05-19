import Link from "next/link"

function Header() {
    return (
        <header>
            <nav className="h-16 text-black bg-white flex justify-center items-center">
                <div className="min-w-full flex justify-between">
                    <div className='m-3'>
                        <Link href="/">
                            Home
                        </Link>
                    </div>
                    <ul className="w-1/12 flex justify-around items-center">
                        <li>
                            <Link href="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                Blog
                            </Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </header>
    )
}

export default Header