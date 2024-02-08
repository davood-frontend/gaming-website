'use client'
import React, { useEffect, useMemo } from 'react';
import { Avatar, Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import AppBackground from '@/components/AppBackground';
import HeroSection from '@/components/HeroSection';
import HomePageHero from '@/components/HomePageHero';
import { Context } from '@/context/mainContext';
import { useContext } from 'react';
import { latestSwiper, gamesSwiper, consolsSwiper, suggestionSwiper } from '@/constants/slidersData'
import ProductCategories from '@/components/ProductCategories';
import SwiperSlider from '@/components/SwiperSlider';
import Image from 'next/image';
import HomePageBanner from '@/components/HomePageBanner';
import Companies from '@/components/Companies';
import Grid from '@mui/material/Unstable_Grid2'


import Blogs from '@/components/Blogs';
import Footer from '@/components/Footer';
const Home = () => {


  const { homePageHero, homePageHandler } = useContext(Context)
  useEffect(() => {
    let timeout = '';
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      if (homePageHero.id == 0) {
        homePageHandler('devilMayCry')
      } else {
        homePageHandler('watchDogs')
      }
    }, 5000);

    return () => {
      clearTimeout(timeout)
    }
  }, [homePageHero])

  return (
    <Box>
      <AppBackground homePageHero={homePageHero}>
        <HeroSection >
          <HomePageHero homePageHero={homePageHero} homePageHandler={homePageHandler} />
        </HeroSection>
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
