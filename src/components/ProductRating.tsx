'use client'
import React from 'react'
import Image from 'next/image'

export default function ProductRating() {
    const products = [
        {
            id: 1,
            name: 'Natuurlijke Cosmetica',
            image: '/Logo/pr01.jpg',
            rating: 4.5,
            originalPrice: '€29.99'
        },
        {
            id: 2,
            name: 'Natuurlijke Cosmetica',
            image: '/Logo/pr02.jpg',
            rating: 5,

            originalPrice: '€24.99'
        },
        {
            id: 3,
            name: 'Natuurlijke Cosmetica',
            image: '/Logo/pr03.jpg',
            rating: 4,

            isNew: true
        }
    ]

    const renderStars = (rating: any) => {
        return Array.from({ length: 5 }).map((_, index) => (
            <span
                key={index}
                className={index < Math.floor(rating) ? 'text-white' : 'text-gray-700'}
            >
                ★
            </span>
        ))
    }

    return (
        <>
            <div className="">
                <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-[#84BD38]"
                                >
                                    <div className="relative w-full aspect-[3/4]">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-6">
                                            <h3 className="text-xl font-bold text-white mb-1">{product.name}</h3>
                                            <div className="flex items-center mb-2">
                                                <div className="flex text-lg">{renderStars(product.rating)}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
