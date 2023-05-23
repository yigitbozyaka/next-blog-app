import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Layout() {

    const [theme, setTheme] = useState('light')
    const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {
        if (theme === 'light') {
            document.documentElement.classList.add('light')
            document.documentElement.classList.remove('dark')
        } else {
            document.documentElement.classList.add('dark')
            document.documentElement.classList.remove('light')
        }
    }, [theme])

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <nav className="container mx-auto py-12 w-screen flex flex-row justify-evenly">
            <Link href="/"><h1 className="text-2xl font-bold z-10">My Blog</h1></Link>
            <div className="hidden md:flex flex-row justify-between space-x-16 text-lg">
                <Link href="/about">About</Link>
                <button>
                    <svg onClick={toggleTheme} className='h-8 w-8 cursor-pointer pb-2' fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        {theme === 'light' ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"></path>
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path>
                        )}
                    </svg>
                </button>
            </div>
            <div className="md:hidden flex flex-col justify-center">
                <button onClick={toggleMenu}>
                    <svg className='h-8 w-8 z-10 cursor-pointer pb-2' fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        {showMenu ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                        )}
                    </svg>
                </button>
                {showMenu && (
                    <div className="z-10 absolute top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-[#bdb89c] border text-4xl space-y-8">
                        <svg onClick={toggleMenu} className='h-8 w-8 absolute top-0 right-0 my-6 mx-6 cursor-pointer' fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <button>
                            <svg onClick={toggleTheme} className='h-8 w-8 cursor-pointer pb-2' fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                {theme === 'light' ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"></path>
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path>
                                )}
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </nav>
    )
}
