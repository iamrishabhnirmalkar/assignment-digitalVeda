'use client'
import React, { useState } from 'react'
import { FaShoppingCart, FaHeart, FaRegHeart } from 'react-icons/fa'

const Product = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            title: 'Natuurlijke Cosmetica',
            description: 'Maak je eigen volledig natuurlijke verzorgingsproducten.',
            image: '/Logo/products001.jpg',
            inWishlist: false
        },
        {
            id: 2,
            title: 'Biologische Gezichtsverzorging',
            description: 'Pure ingrediënten voor een stralende huid.',
            image: '/Logo/products002.png',
            inWishlist: false
        },
        {
            id: 3,
            title: 'Essentiële Oliën Set',
            description: "Ontspannende aroma's voor lichaam en geest.",
            image: '/Logo/products003.jpg',
            inWishlist: false
        },
        {
            id: 4,
            title: 'DIY Verzorgingspakket',
            description: 'Alles wat je nodig hebt voor natuurlijke cosmetica.',
            image: '/Logo/products004.jpg',
            inWishlist: true
        }
    ])

    const toggleWishlist = (id: any) => {
        setProducts(products.map((product) => (product.id === id ? { ...product, inWishlist: !product.inWishlist } : product)))
    }

    return (
        <div className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">Beauty Essentials</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Natuurlijke Cosmetica - Maak je eigen volledig natuurlijke verzorgingsproducten.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="h-48 w-full overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>

                            <div className="p-5">
                                <h3 className="font-semibold text-lg text-gray-900 mb-1">{product.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                                <div className="flex justify-center gap-2">
                                    <button className="flex items-center gap-1 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-200 transition-colors">
                                        <FaShoppingCart className="text-sm" /> CART
                                    </button>
                                    <button
                                        onClick={() => toggleWishlist(product.id)}
                                        className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                                            product.inWishlist ? 'bg-red-600 text-white' : 'bg-red-600 text-white'
                                        }`}
                                    >
                                        {product.inWishlist ? <FaHeart /> : <FaRegHeart />} WISHLIST
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Product
