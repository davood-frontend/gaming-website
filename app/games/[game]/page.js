import { Box } from '@mui/material';
import React from 'react';
import BackGround from '@/components/games/BackGround';
import Hero from '@/components/game/Hero';
import AddToChart from '@/components/game/AddToChart';
import Title from '@/components/game/Title';
import AboutProduct from '@/components/game/AboutProduct';
import ProductFeatures from '@/components/game/ProductFeatures';
import Comments from '@/components/game/Comments';
import SwiperSlider from '@/components/SwiperSlider';
import { suggestionSwiper } from '@/constants/slidersData';
const GamePage = () => {
    return (
        <Box >
            <BackGround />
            <Hero />
            <Box sx={{ px: { xs: '3%', sm: '5%', md: '10%' }, my: 5 }}>
                <Title />
                <AddToChart />
                <AboutProduct />
                <ProductFeatures />
                <Comments />
            </Box>
            <Box sx={{ mb: 10 }}>
                <SwiperSlider delay={4000} data={suggestionSwiper} />
            </Box>

        </Box>
    );
};

export default GamePage; 