import React from 'react';
import { Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import HomePageHero from '@/components/HomePageHero';

const HeroSection = ({ homePageHero ,homePageHandler}) => {
    return (
        <Box sx={{ px: { xs: '10px', sm: '20px', md: '30px', lg: '10%' }, position: 'absolute', width: 1, height: 1, top: { xs: 50, md: 180, lg: 160 }, right: 0, display: 'flex', justifyContent: 'center' }}>
            <Grid spacing={{ xs: 0, sm: 2, md: 3 }} container sx={{ width: 1, alignItems: 'start', justifyContent: 'start' }}>
                <HomePageHero homePageHero={homePageHero} homePageHandler={homePageHandler}/>
            </Grid>
        </Box>

    );
};

export default HeroSection;