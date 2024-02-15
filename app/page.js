import React from 'react';
import Box from '@mui/material/Box'
import AppBackground from '@/components/AppBackground';
import HomePageHero from '@/components/HomePageHero';
import { latestSwiper, gamesSwiper, consolsSwiper, suggestionSwiper } from '@/constants/slidersData'
import ProductCategories from '@/components/ProductCategories';
import SwiperSlider from '@/components/SwiperSlider';
import HomePageBanner from '@/components/HomePageBanner';
import Companies from '@/components/Companies';
import Blogs from '@/components/Blogs';

const Home = () => {
  return (
    <Box>
      <AppBackground >
        <HomePageHero />
      </AppBackground>
      <ProductCategories />
      <SwiperSlider data={latestSwiper} delay={3000} />
      <SwiperSlider data={gamesSwiper} delay={4000} />
      <SwiperSlider data={consolsSwiper} delay={5000} />
      <HomePageBanner />
      <Companies />
      <SwiperSlider data={suggestionSwiper} delay={3000} />
      <Blogs />

    </Box >
  );
};

export default Home;
