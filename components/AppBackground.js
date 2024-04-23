'use client'
import React, { useEffect, useState } from 'react';
import HeroSection from './HeroSection';
import { Box } from '@mui/material'

import BackGround from './Background';
const AppBackground = ({ children, data }) => {
    const { items } = data
    const [item1, item2] = items
    const [homePageHero, setHomePageHero] = useState(item1)
    const homePageHandler = (item) => {
        setHomePageHero(item)
    }

    useEffect(() => {
        let timeout = '';
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            if (homePageHero.slug == item1.slug) {
                homePageHandler(item2)
            } else {
                homePageHandler(item1)
            }
        }, 5000);

        return () => {
            clearTimeout(timeout)
        }
    }, [homePageHero])
    return (
        <Box sx={{ position: 'relative' }} className='container'>
            <BackGround img={homePageHero.bigImage} />
            <HeroSection homePageHero={homePageHero} homePageHandler={homePageHandler} items={items}>
                {children}
            </HeroSection>
        </Box>

    );
};
export default AppBackground; 