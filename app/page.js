'use client'
import React, { useEffect } from 'react';
import { Box, Avatar, Typography, Button } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import { MobileHeader, DesktopHeader } from '@/components/Headers'
import AppBackground from '@/components/AppBackground';
import HeroSection from '@/components/HeroSection';
import HomePageHero from '@/components/HomePageHero';
import { Context } from '@/context/mainContext';
import { useContext } from 'react';

import { latest, games, consols } from '@/constants/slidersData'
import Grid from '@mui/material/Unstable_Grid2'
import ProductCategories from '@/components/ProductCategories';
import LatestProduct from '@/components/LatestProduct';
import HomePageBanner from '@/components/HomePageBanner';
import { grey } from '@mui/material/colors';
import Companies from '@/components/Companies';
const Home = () => {

  const { homePageHero, homePageHandler } = useContext(Context)
  const theme = useTheme()
  const largerThanMd = useMediaQuery(theme.breakpoints.up('md')) //false by default
  const smallerThanSm = useMediaQuery(theme.breakpoints.down('sm')) //false by default

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
  const OverLay = ({ backGround }) => {
    return (
      <Box sx={{ position: 'absolute', width: 1, height: 1, top: 0, right: 0, background: backGround, zIndex: 1 }} />
    )
  }
  return (
    <Box>

      {largerThanMd ? <DesktopHeader /> : <MobileHeader />}

      <Box sx={{ backgroundColor: '#101820', height: '8200px' }}>
        <AppBackground homePageHero={homePageHero} background='linear-gradient(to top, #101820, rgba(16, 24, 32, 0))'>
          <HeroSection >
            <HomePageHero homePageHero={homePageHero} homePageHandler={homePageHandler} />
          </HeroSection>
        </AppBackground>
        <ProductCategories />
        <LatestProduct data={latest} delay={3000} />
        <LatestProduct data={games} delay={4000} />
        <LatestProduct data={consols} delay={5000} />
        <HomePageBanner />
        <Companies />


      </Box>
    </Box >
  );
};

export default Home;
