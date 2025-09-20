'use client'
import React, { useState } from 'react'
import { FaCheck, FaUser } from 'react-icons/fa'

export default function Announcement() {
    const [isVisible, setIsVisible] = useState(true)

    const announcements = [
        { id: 1, text: 'Gratis verzending vanaf €50' },
        { id: 2, text: '100 dagen retour' },
        { id: 3, text: 'text nunmber 03 uit 5' },
        { id: 4, text: 'text nunmber 04' },
        { id: 5, text: 'text number 05' }
    ]

    if (!isVisible) return null

    return (
        <div className="w-full bg-[#1a1a1a] text-white py-2 px-4 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full pattern-dots pattern-green-500 pattern-bg-white pattern-size-2 pattern-opacity-20"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex items-center justify-between">
                    <div className="flex-1 overflow-hidden">
                        <div className="animate-marquee whitespace-nowrap">
                            <div className="inline-flex items-center space-x-8 mr-8">
                                {announcements.map((item) => (
                                    <div
                                        key={item.id}
                                        className="inline-flex items-center gap-2"
                                    >
                                        <span className="bg-[#84BD38] text-white rounded-full p-1 flex items-center justify-center">
                                            <FaCheck className="text-xs" />
                                        </span>
                                        <span>{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-2 ml-6 flex-shrink-0">
                        <span className="bg-[#84BD38] text-white rounded-full p-1 flex items-center justify-center">
                            <FaUser className="text-xs" />
                        </span>
                        <span>Inloggen / Registreren</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
