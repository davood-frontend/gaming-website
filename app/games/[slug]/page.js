import Box from '@mui/material/Box';
import React from 'react';
import BackGround from '@/components/products/BackGround';
import Hero from '@/components/product/Hero';
import AddToChart from '@/components/product/AddToChart';
import Title from '@/components/product/Title';
import AboutProduct from '@/components/product/AboutProduct';
import ProductFeatures from '@/components/product/ProductFeatures';
import Comments from '@/components/product/Comments';
import SwiperSlider from '@/components/SwiperSlider';
import { randomDataPicker } from '@/constants/functions';
const fetchCurrentProduct = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/games/${slug}`)
    const data = await res.json()
    return data
}
const fetchAllProducts = async () => {
    const res = await fetch(`http://localhost:3000/api/games`)
    const data = await res.json()
    return data
}
const GamePage = async ({ params }) => {
    const { slug } = params
    const currentProduct = await fetchCurrentProduct(slug)
    const allProducts = await fetchAllProducts()

    const swiperData = randomDataPicker(allProducts)

    return (
        <Box >
            <BackGround data={currentProduct} />

            <Hero data={currentProduct} />
            <Box sx={{ px: { xs: '3%', sm: '5%', md: '10%' }, my: 5 }}>
                <Title data={currentProduct} />
                <AddToChart data={currentProduct} />
                <AboutProduct data={currentProduct} />
                <ProductFeatures data={currentProduct} />
                <Comments data={currentProduct} />
            </Box>

            <Box sx={{ mb: 10 }}>
                <SwiperSlider delay={4000} data={swiperData} SliderInfo={{ title: 'محصولات پیشنهادی', desc: 'محصولاتی که ما به شما پیشنهاد میکنیم' }} />
            </Box>

        </Box >
    );
};

export default GamePage; 