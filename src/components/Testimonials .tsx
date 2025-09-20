'use client'
import React, { useState, useEffect } from 'react'

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            text: 'Ik heb onlangs een setje besteld, dieppo zeep + plankje, scrub handschoen en erganolie. Snel en netjes bezorgt. Ik ben heel tevreden de producten zijn heel fijn. Ik ga zeker weer een bestelling plaatsen als het bijna op is.',
            author: 'Jolanda Riet',
            location: 'Raipur',
            rating: 5
        },
        {
            id: 2,
            text: 'Uitstekende service en producten van hoge kwaliteit. De levering was sneller dan verwacht en de verpakking was perfect. Zeker een aanrader!',
            author: 'Mark de Vries',
            location: 'Amsterdam',
            rating: 5
        },
        {
            id: 3,
            text: 'Al jarenlang tevreden klant. De producten zijn altijd consistent van hoge kwaliteit en de customer service is vriendelijk en behulpzaam.',
            author: 'Sanne Bakker',
            location: 'raipur',
            rating: 4
        },
        {
            id: 4,
            text: 'Snelle levering en mooie producten. De zeep ruikt heerlijk en de verzorging is perfect. Ik ben zeer tevreden met mijn aankoop.',
            author: 'Thomas Jansen',
            location: 'raipur',
            rating: 5
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    const generateStars = (rating: any) => {
        return Array.from({ length: 5 }).map((_, index) => (
            <span
                key={index}
                className={index < rating ? 'text-white' : 'text-gray-100'}
            >
                ★
            </span>
        ))
    }

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    }

    const goToTestimonial = (index: any) => {
        setCurrentIndex(index)
    }

    useEffect(() => {
        let interval: any
        if (isAutoPlaying) {
            interval = setInterval(nextTestimonial, 5000)
        }
        return () => {
            if (interval) clearInterval(interval)
        }
    }, [isAutoPlaying, currentIndex])

    return (
        <div className="bg-[#84BD38] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    <div className="flex flex-col items-center text-center">
                        <p className="text-white italic text-lg mb-6">{testimonials[currentIndex].text}</p>
                        <div className="border-t border-gray-200 w-20 mb-4"></div>
                        <div className="flex items-center gap-2">
                            <h4 className="text-xl font-semibold text-white">{testimonials[currentIndex].author} /</h4>

                            <p className="text-white">{testimonials[currentIndex].location}</p>
                        </div>
                        <div className="text-2xl mb-4">{generateStars(testimonials[currentIndex].rating)}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
