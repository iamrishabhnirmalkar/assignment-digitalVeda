import Image from 'next/image'
import React from 'react'

export default function LogoBanner() {
    const serviceCards = [
        {
            id: 1,
            title: 'SHIPPING & RETURN',
            description: "If your glasses aren't perfect, return them within 30 days",
            bgColor: 'bg-red-600',
            textColor: 'text-white',
            icon: (
                <Image
                    src="/Logo/service02.png"
                    alt="Shipping & Return"
                    width={100}
                    height={100}
                />
            ),
            rounded: ''
        },
        {
            id: 2,
            title: 'SAFE PAYMENT',
            description: "Pay with the world's most popular and secure payment methods",
            bgColor: 'bg-red-600',
            textColor: 'text-white',
            icon: (
                <Image
                    src="/Logo/service01.png"
                    alt="Shipping & Return"
                    width={100}
                    height={100}
                />
            ),
            rounded: ''
        },
        {
            id: 3,
            title: 'SHOP WITH CONFIDENCE',
            description: 'Our Buyer Protection covers your purchase from click to delivery',
            bgColor: 'bg-red-600',
            textColor: 'text-white',
            icon: (
                <Image
                    src="/Logo/service03.png"
                    alt="Shipping & Return"
                    width={100}
                    height={100}
                />
            ),
            rounded: ''
        }
    ]

    return (
        <div className="container">
            <div className="py-12 px-4 sm:px-6 lg:px-8 bg-red-600">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {serviceCards.map((card) => (
                            <div
                                key={card.id}
                                className={`${card.bgColor} ${card.rounded} p-6 transition-all duration-300 hover:shadow-xl`}
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 flex items-center justify-center mb-4">{card.icon}</div>
                                    <h3 className={`text-xl font-semibold ${card.textColor} mb-3`}>{card.title}</h3>
                                    <p className={card.textColor}>{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
