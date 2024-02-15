'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import HeroSection from './HeroSection';
import { Box, Avatar } from '@mui/material'
import { Context } from '@/context/mainContext';
import { useContext } from 'react';
const AppBackground = ({ children }) => {
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
        <Box sx={{ position: 'relative', height: { xs: '400px', sm: '450px', md: '700px', lg: '800px' }, zIndex: 0 }} className='container'>
            <Avatar variant='square' sx={{ height: 1, width: 1, position: 'absolute' }}>
                <Image src={homePageHero.background} fill style={{ filter: 'grayscale(1) blur(3px)', objectFit: 'cover' }} className={homePageHero.class} alt='عکس پس زمینه' />
            </Avatar>
            <Box sx={{ position: 'absolute', width: 1, height: 1, top: 0, right: 0, background: 'linear-gradient(to top, #101820, rgba(16, 24, 32, 0))' }} />
            <HeroSection homePageHero={homePageHero} homePageHandler={homePageHandler}>
                {children}
            </HeroSection>
        </Box>

    );
};

export default AppBackground; 