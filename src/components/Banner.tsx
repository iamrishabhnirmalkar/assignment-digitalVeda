import React from 'react'
import Image from 'next/image'

export default function Banner() {
    return (
        <div className="w-full relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[500px] flex items-center">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Logo/BannerBg.jpg"
                    alt="Natural background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-indigo-900/50"></div>
            </div>

            <div className="absolute right-0 bottom-0 w-1/2 max-w-lg z-5 hidden lg:block px-9">
                <Image
                    src="/Logo/Product01.png"
                    alt="Natural product"
                    width={500}
                    height={500}
                    className="w-full h-auto object-contain"
                />
            </div>

            <div className="max-w-4xl mx-auto relative z-10 w-full">
                <div className="text-center lg:text-left text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 drop-shadow-md">Pure Natural</h1>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 drop-shadow-md">Organic Care</h2>

                    <div className="mb-8 text-lg md:text-xl space-y-4 drop-shadow-md max-w-2xl">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, id atque. Quam, a ab. Error odio libero, culpa iusto nemo
                            inventore doloribus reiciendis. Distinctio a beatae in commodi excepturi necessitatibus!
                        </p>
                    </div>

                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg text-lg">
                        Buy Now{' '}
                    </button>
                </div>
            </div>

            {/* Mobile Product Image */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center z-5 lg:hidden">
                <div className="w-1/2 max-w-xs">
                    <Image
                        src="/Logo/Product01.png"
                        alt="Natural product"
                        width={300}
                        height={300}
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
        </div>
    )
}
