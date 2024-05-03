import Box from '@mui/material/Box';
import React from 'react';
import BackGround from '@/components/general/Background';
import Hero from '@/components/product/Hero';
import AddToChart from '@/components/product/AddToChart';
import Title from '@/components/product/Title';
import AboutProduct from '@/components/product/AboutProduct';
import ProductFeatures from '@/components/product/ProductFeatures';
import Comments from '@/components/product/Comments';
import SwiperSlider from '@/components/homePage/SwiperSlider';
import { randomDataPicker } from '@/app/utils/functions';
import { fetchAllGames, fetchGame } from '@/app/services/requests'
export function generateMetadata({ params, searchParams, }) {
    return {
        title: searchParams.name
    }
}

const GamePage = async ({ params }) => {
    const { slug } = params
    const currentProduct = await fetchGame(slug)
    const allProducts = await fetchAllGames()

    const swiperData = randomDataPicker(allProducts)
    return (
        <Box >
            <BackGround img={currentProduct.image} opacity={'0.4'} />

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