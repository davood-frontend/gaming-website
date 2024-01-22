'use client'
import React, { useEffect } from 'react';
import { Box, Avatar, Typography } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import { MobileHeader, DesktopHeader } from '@/components/Headers'
import AppBackground from '@/components/AppBackground';
import HeroSection from '@/components/HeroSection';
import HomePageHero from '@/components/HomePageHero';
import { Context } from '@/context/mainContext';
import { useContext } from 'react';
const Home = () => {
  const { homePageHero, homePageHandler } = useContext(Context)
  const theme = useTheme()
  const largerThanMd = useMediaQuery(theme.breakpoints.up('md')) //false by default

  useEffect(() => {
    let timeout = '';
    if (timeout) {
      clearTimeout(timeout)
    }
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

      {largerThanMd ? <DesktopHeader /> : <MobileHeader />}

      <Box sx={{ backgroundColor: '#101820', height: '8200px' }}>
        <AppBackground homePageHero={homePageHero}>
          <HeroSection >
            <HomePageHero homePageHero={homePageHero} homePageHandler={homePageHandler} />
          </HeroSection>
        </AppBackground>
        <Box sx={{ color: 'white' }}>
          what you doin
        </Box>

      </Box>
    </Box>
  );
};

export default Home;
