import Banner from '@/components/Banner'
import LogoBanner from '@/components/LogoBanner'
import Product from '@/components/Product'
import ProductRating from '@/components/ProductRating'
import Testimonial from '@/components/Testimonials '
import Image from 'next/image'

export default function Home() {
    return (
        <>
            <Banner />
            <Product />
            <LogoBanner />
            <Testimonial />
            <Product />
            <ProductRating />
        </>
    )
}
