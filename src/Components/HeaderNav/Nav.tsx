"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav({page}:{page:string}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="border-gray-200 bg-gray-900 dark:bg-gray-900 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link
                    href="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                        Alfonso Lozita
                    </span>
                </Link>
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
                    aria-expanded={isMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    className={`${
                        isMenuOpen ? "block" : "hidden"
                    } w-full md:block md:w-auto mt-4 md:mt-0`}
                >
                    <ul className="flex flex-col text-white font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                        <li>
                            <Link
                                onClick={toggleMenu}
                                href="/"
                                className={`block py-2 px-3 md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700  md:dark:hover:text-blue-500 dark:hover:bg-gray-700  md:dark:hover:bg-transparent ${page === 'home' ? ' text-blue-700' : 'text-white'}`}
                            >
                                Home
                            </Link>

                        </li>
                        <li>
                            <Link
                                onClick={toggleMenu}
                                href="/proyects"
                                className={`block py-2 px-3 md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700  md:dark:hover:text-blue-500 dark:hover:bg-gray-700  md:dark:hover:bg-transparent ${page === 'proyects' ? ' text-blue-700' : 'text-white'}`}
                            >
                                Proyectos
                            </Link>

                        </li>
                        <li>
                            <Link
                                onClick={toggleMenu}
                                href="/about-me"
                                className={`block py-2 px-3 md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700  md:dark:hover:text-blue-500 dark:hover:bg-gray-700  md:dark:hover:bg-transparent ${page === 'about-me' ? ' text-blue-700' : 'text-white'}`}
                            >
                                Sobre Mi
                            </Link>

                        </li>
                        
                        <li>
                            <Link
                                onClick={toggleMenu}
                                href="/contact"
                                className={`block py-2 px-3 md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700  md:dark:hover:text-blue-500 dark:hover:bg-gray-700  md:dark:hover:bg-transparent ${page === 'contact' ? ' text-blue-700' : 'text-white'}`}
                            >
                                Contactame
                            </Link>

                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
}
