'use client'
import React from 'react';
import Image from 'next/image';
import assassinsCreed from '@/assets/assassinsCreed.jpg'
import watchDogs from '@/assets/watchDogs.jpg'
import { Box, Avatar, Typography } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import { MobileHeader, DesktopHeader } from '@/components/Headers'
import { Circle, ShoppingCartOutlined } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import Grid from '@mui/material/Unstable_Grid2'
import AppBackground from '@/components/AppBackground';
import HeroSection from '@/components/HeroSection';
import HomePageHero from '@/components/HomePageHero';
const Home = () => {
  const theme = useTheme()
  const smallerThanMd = useMediaQuery(theme.breakpoints.down('md'))
  const largerThanMd = useMediaQuery(theme.breakpoints.up('md')) //false by default

  return (
    <Box>

      {largerThanMd ? <DesktopHeader /> : <MobileHeader />}

      <Box sx={{ backgroundColor: '#101820', height: '8200px' }}>
        <AppBackground>
          <HeroSection>
            <HomePageHero />
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
