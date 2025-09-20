'use client'
import Image from 'next/image'
import { useState } from 'react'
import { FaSearch, FaShoppingBag, FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const menuItems = ['COSMETICA & VERZORGING', 'AROMATHERAPIE', 'GRONDSTOFFEN', 'PAKKETTEN', 'ACCESSOIRES']

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-2">
                    <Image
                        src="/Logo/Logo.png"
                        alt="logo"
                        width={200}
                        height={100}
                    />
                </div>

                <div className="hidden md:flex flex-1 mx-6">
                    <div className="flex w-full max-w-2xl items-center border border-[#84BD38] rounded-full overflow-hidden">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="flex-1 px-4 py-2 outline-none"
                        />
                        <button className="bg-[#84BD38] text-white px-4 py-2 ">
                            <FaSearch />
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button className="text-[#84BD38] text-2xl">
                        <FaShoppingBag />
                    </button>

                    <button
                        className="text-2xl md:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            <nav className="hidden md:flex justify-center bg-gray-100 py-2 shadow-inner">
                <ul className="flex gap-8 text-sm font-semibold uppercase">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <a
                                href="#"
                                className="hover:text-[#84BD38] transition"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {menuOpen && (
                <div className="md:hidden bg-gray-50 border-t">
                    <div className="px-4 py-3">
                        <div className="flex w-full items-center border border-[#84BD38] rounded-full overflow-hidden">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="flex-1 px-4 py-2 outline-none"
                            />
                            <button className="bg-[#84BD38] text-white px-4 py-2 ">
                                <FaSearch />
                            </button>
                        </div>
                    </div>

                    <ul className="flex flex-col text-center text-sm font-semibold uppercase">
                        {menuItems.map((item, index) => (
                            <li
                                key={index}
                                className="py-3 border-b"
                            >
                                <a
                                    href="#"
                                    className="hover:text-[#84BD38] transition"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    )
}
