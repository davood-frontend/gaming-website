import React from 'react';
import { Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import HomePageHero from '@/components/homePage/HomePageHero';

const HeroSection = ({ homePageHero, homePageHandler, items }) => {
    return (
        <Box sx={{ px: { xs: '10px', md: '30px', lg: '10%' }, pt: { xs: 3, md: 22 }, pb: 5, display: 'flex', justifyContent: 'center' }}>
            <Grid spacing={{ xs: 0, sm: 1, md: 3 }} container sx={{ width: 1, alignItems: 'start', justifyContent: 'start' }}>
                <HomePageHero homePageHero={homePageHero} homePageHandler={homePageHandler} items={items} />
            </Grid>
        </Box>

    );
};

export default HeroSection;